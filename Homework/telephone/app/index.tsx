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
    直接輸入：
    \t\t包含關鍵字的單位
    開頭加-：
    \t\t不含關鍵字的單位
    開頭加+：
    \t\t完全符合關鍵字的單位
    開頭加$：
    \t\t以關鍵字結尾的單位
    開頭加^：
    \t\t以關鍵字開頭的單位
    \n#不可混用!
    `
  );
  const callNumber = (item: Item) => {
    if (item.專線 !== "*") Linking.openURL(`tel:06${item.專線}`);
  }
  const render = ({ item }: { item: Item }) => {
    return (
      <View style={[styles.itemBox]}>
        <Text style={styles.itemTitle}>{item.單位}</Text>
        {(item.專線 !== "*") ? (
          <View style={[styles.row, styles.center]}>
            <Text style={styles.itemText}>專線：</Text>
            <TouchableOpacity onPress={() => callNumber(item)}><Text style={styles.itemNumber}>{item.專線}</Text></TouchableOpacity>
          </View>
        ) : null}
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
        <View style={[styles.row, styles.center]}>
          <TextInput style={[styles.inputBox, styles.some]} placeholder="請輸入單位名稱" value={keyword} onChangeText={setKeyword} />
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
    alignItems: "center"
  },
  main: {
    gap: 15,
    backgroundColor: "#F3F1FF"
  },
  titleBox: {
    padding: 10
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#726896ff"
  },
  row: {
    flexDirection: "row"
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#60587E",
    marginLeft: 10,
    minHeight: 40
  },
  question: {
    padding: 10,
    color: "#60587E"
  },
  itemBox: {
    borderColor: "#C3B4B4",
    borderWidth: 1,
    borderRadius: 7,
    marginVertical: 5,
    marginHorizontal: 5,
    minHeight: 70,
    padding: 10
  },
  itemTitle: {
    fontSize: 20,
    color: "#5D5164",
    fontWeight: "600"
  },
  itemText: {
    color: "#7870b2ff",
    fontSize: 16
  },
  itemNumber: {
    color: "#b7a4d6ff",
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#bdaed6ff"
  }
});