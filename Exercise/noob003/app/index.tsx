import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState<number[]>([]);
  const addItem = () => {
    setList([...list, count]);
  };
  const clearItem = () => {
    setList([]);
  };
  const render = ({ item, index }) => {
    return (
      <View style={styles.litxt}>
        <Text style={styles.word}>{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.root}>
      <View style={styles.title}>
        <Text style={styles.bigword}>待辦事項</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.btn, styles.colorB]} onPress={addItem}>
          <Text style={styles.word}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.colorA]} onPress={clearItem}>
          <Text style={styles.word}>clear</Text>
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
    minWidth: 100,
    alignItems: "center",
    borderRadius: 10,
  },
  word: {
    fontSize: 20,
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
  },
  colorA: {
    backgroundColor: "#f30",
  },
  colorB: {
    backgroundColor: "#39d",
  },
});
