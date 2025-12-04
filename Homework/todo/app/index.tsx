import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';

export default function Index() {
  const [word, setWord] = useState("");
  const [list, setList] = useState([]);
  const addItem = () => {};

  return (
    <View style={[basic.few]}>   {/* 根標籤 */}

      {/* 標題區 */}
      <View style={[basic.few]}>
        <Text style={basic.title}>代辦事項</Text>
      </View>

      {/* 功能區 */}
      <View style={[basic.func]}>

        {/* 輸入列 */}
        <View style={basic.inputRow}>
          <TextInput
            style={basic.input}
            placeholder="輸入代辦事項"
            value={word}
            onChangeText={setWord}
          />

          <TouchableOpacity style={basic.addBtn} onPress={addItem}>
            <Entypo name="add-to-list" size={30} color="black" />  {/* 添加icon */}
          </TouchableOpacity>
        </View>

        {/* 項目過濾按鈕 */}
        <View style={basic.filterRow}>
          <TouchableOpacity style={basic.filterBtn}>
            <Text style={basic.filterText}>已完成</Text>
          </TouchableOpacity>

          <TouchableOpacity style={basic.filterBtn}>
            <Text style={basic.filterText}>未完成</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 項目區 */}
      <View style={[basic.most]}>
        <View style={basic.itemBlock}>
          <TouchableOpacity>
            <Entypo name="edit" size={30} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Entypo name="circle-with-cross" size={30} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="information-circle" size={30} color="black" />
          </TouchableOpacity>
        </View>
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
    justifyContent: "center"
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
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  addBtn: {
    marginLeft: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },
  filterBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#333",
    borderRadius: 10
  },
  filterText: {
    color: "white",
    fontSize: 16
  },
  itemBlock: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    padding: 20,
    backgroundColor: "#eee",
    borderRadius: 15
  }
});

//深色樣式
const dark = StyleSheet.create({});

//淺色樣式
const light = StyleSheet.create({});
