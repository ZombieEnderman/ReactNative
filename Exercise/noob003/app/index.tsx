import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import { AntDesign, FontAwesome6, FontAwesome5 } from '@expo/vector-icons';

export default function Index() {
  const [list, setList] = useState<string[]>([]);
  const addItem = () => {
    let time = new Date();
    setList([...list, time.toLocaleString("zh-TW", { "hour12": false })]);
  };
  const clearItem = () => {
    setList([]);
  };
  const removeItem = (index: number) => {
    setList(list.filter((item, i) => i !== index));
  };
  const render = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.litxt} onPress={() => removeItem(index)}>
        <View style={{ flexDirection: "row", flex: 1, alignItems: "center", }}>
          <Text style={[styles.word, { flex: 1 }]}>{item}</Text>
          <AntDesign name="minus" size={24} color="black" />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.root}>
      <View style={styles.title}>
        <Text style={styles.bigword}>時間戳</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.btn, styles.colorB]} onPress={addItem}>
          <FontAwesome6 name="add" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.colorA]} onPress={clearItem}>
          <FontAwesome5 name="trash" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          data={list}
          keyExtractor={(item, index) => `${item} - ${index}`}
          renderItem={render}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  bigword: {
    fontSize: 30,
    fontWeight: "700",
  },
  btn: {
    minWidth: 140,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    minHeight: 50,
  },
  word: {
    fontSize: 17,
  },
  list: {
    flex: 7,
    padding: 20,
  },
  litxt: {
    borderLeftWidth: 2,
    borderRadius: 5,
    margin: 5,
    backgroundColor: "#ee0",
    paddingHorizontal: 10,
  },
  colorA: {
    backgroundColor: "#f30",
  },
  colorB: {
    backgroundColor: "#39d",
  },
});
