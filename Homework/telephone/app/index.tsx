import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, FlatList, Linking, Alert } from "react-native";
import Storage from "@react-native-async-storage/async-storage";
import { Item } from "@/types/itemList";
const originList = require("@/assets/電話簿.json") as Item[];
import { FontAwesome } from '@expo/vector-icons';

export default function Index() {
  const [keyword, setKeyword] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const filteredList = originList.filter(item => {
    if (!keyword) return true;
    const target = item.單位 || "";
    const operator = keyword[0];
    const restOfKeyword = keyword.slice(1).replace(/\s+/g, "");
    const cleanKeyword = keyword.replace(/\s+/g, "");
    switch (operator) {
      case "-":
        return restOfKeyword ? (!target.includes(restOfKeyword)) : true;
      case "+":
        return target.includes(restOfKeyword);
      case "$":
        return target.endsWith(restOfKeyword);
      case "^":
        return target.startsWith(restOfKeyword);
      default:
        return Array.from(cleanKeyword).every(char => target.includes(char));
    }
  });
  const save = async () => {
    try {
      await Storage.setItem("keyword", keyword);
    } catch (e) {
      console.error("儲存失敗", e);
    }
  }
  const load = async () => {
    try {
      const value = await Storage.getItem("keyword");
      if (value !== null) setKeyword(value);
    } catch (e) {
      console.error("載入失敗", e);
    }
    setIsLoaded(true);
  }
  useEffect(() => {
    load();
  }, []);
  useEffect(() => {
    if (isLoaded) save();
  }, [keyword]);
  const displayRule = () => Alert.alert(
    "搜尋規則說明",
    `
      直接輸入：包含關鍵字的單位
      -：不含關鍵字的單位
      +：完全符合關鍵字的單位
      $：以關鍵字結尾的單位
      ^：以關鍵字開頭的單位
    `
  );
  const render = ({ item }: { item: Item }) => {
    return (
      <View style={[styles.itemBox]}>
        <Text style={styles.itemTitle}>{item.單位}</Text>
        {(item.專線 !== "*") ? (<Text style={styles.itemText}>專線：{item.專線}</Text>) : null}
        {(item.分機 !== "*") ? (<Text style={styles.itemText}>分機：{item.分機}</Text>) : null}
      </View>
    )
  }
  return (
    <View style={[styles.some, styles.main]}>
      <View>
        <View style={[styles.center, styles.titleBox]}>
          <Text style={styles.title}>台南應用科技大學</Text>
        </View>
        <View style={[styles.funcBox, styles.center]}>
          <TextInput style={[styles.inputBox, styles.some]} placeholder="請輸入名稱" value={keyword} onChangeText={setKeyword} />
          <TouchableOpacity onPress={displayRule}>
            <FontAwesome name="question-circle" size={35} style={styles.question} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.some]}>
        <FlatList data={filteredList} keyExtractor={(item, index) => index.toString()} renderItem={render} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  some: {
    flex: 1
  },
  center: {
    alignItems: "center",
  },
  main: {
    gap: 15,
  },
  titleBox: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#000000",
  },
  funcBox: {
    flexDirection: "row",
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#000000",
    marginLeft: 10,
  },
  question: {
    padding: 10,
    color: "#0011ffff"
  },
  itemBox: {
    borderColor: "#949494ff",
    borderWidth: 1,
    borderRadius: 7,
    marginVertical: 5,
    marginHorizontal: 5,
    minHeight: 70,
    padding: 10,
  },
  itemTitle: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "600",
  },
  itemText: {
    color: "#6e6e6eff",
    fontSize: 16,
  },
});