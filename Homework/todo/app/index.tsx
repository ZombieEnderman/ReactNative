import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons';

export default function Index() {
  const [word, setWord] = useState("");
  const [list, setList] = useState<string[]>([]);
  const clearList = () => {
    setList([]);
  }
  const addItem = () => {
    setList([...list, word]);
    setWord("");
  };
  const removeItem = (idex: number) => {
    setList(list.filter((item, i) => i != idex));
  }
  const tag = ({ item, index }: { item: string, index: number }) => (
    <View style={[basic.item, basic.few, dark.itemBlock]}>
      <Text style={basic.most}>{item}</Text>
      <TouchableOpacity>
        <Entypo name="edit" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeItem(index)}>
        <Entypo name="circle-with-cross" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="information-circle" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[basic.few]}>   {/* 根標籤 */}

      {/* 標題區 */}
      <View style={[basic.few]}>
        <Text style={basic.title}>代辦事項</Text>
      </View>

      {/* 功能區 */}
      <View style={[basic.func]}>
        <TextInput
          style={[basic.input, dark.inputBlock]}
          placeholder="輸入代辦事項"
          value={word}
          onChangeText={setWord}
        />
        <View style={[basic.buttonGroup, basic.few]}>
          <TouchableOpacity style={[basic.button, basic.few, dark.buttonBlock]}>
            <Ionicons name="sunny" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={[basic.button, basic.few, dark.buttonBlock]} onPress={clearList}>
            <Ionicons name="trash" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={[basic.button, basic.few, dark.buttonBlock]} onPress={addItem}>
            <Entypo name="add-to-list" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={[basic.button, basic.few, dark.buttonBlock]}>
            <Text style={basic.filterText}>已完成</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[basic.button, basic.few, dark.buttonBlock]}>
            <Text style={basic.filterText}>未完成</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 項目區 */}
      <View style={[basic.most]}>
        <FlatList data={list} keyExtractor={(item, index) => `${item} ${index}`} renderItem={tag} />
      </View>
    </View>
  );
}

//一般性樣式
const basic = StyleSheet.create({
  few: {
    flex: 1,
  },
  func: {
    flex: 2,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  most: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    gap: 5,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    borderRadius: 12,
    minHeight: 50
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: "95%",
    padding: 12,
    borderRadius: 15,
    marginVertical: 3
  },
  filterText: {
    fontSize: 16
  },
});

//深色樣式
const dark = StyleSheet.create({
  buttonBlock: {
    backgroundColor: "#dededeff",
  },
  itemBlock: {
    backgroundColor: "#dad9d9ff",
  },
  inputBlock: {
    backgroundColor: "#dadadaff",
    borderColor: "#7a7a7aff",
  },
});

//淺色樣式
const light = StyleSheet.create({});
