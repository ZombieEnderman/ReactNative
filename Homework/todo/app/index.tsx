import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons';

export default function Index() {
  const [word, setWord] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [isDark, setIsdark] = useState(true);
  const clearList = () => {
    setList([]);
  }
  const addItem = () => {
    if (word != "") {
      setList([...list, word]);
      setWord("");
    } else {
      setList([...list, "某件事"]);
    }
  }
  const removeItem = (idex: number) => {
    setList(list.filter((item, i) => i != idex));
  }
  const tag = ({ item, index }: { item: string, index: number }) => (
    <View style={[basic.item, basic.row, isDark ? (dark.itemBlock) : (light.itemBlock)]}>
      <View style={basic.few}>
        <Text style={[basic.itemTitle, isDark ? (dark.itemText) : (light.itemText)]}>{item}</Text>
      </View>
      <View style={[basic.row]}>
        <TouchableOpacity>
          <Entypo name="edit" size={30} style={isDark ? (dark.defaultIcon) : (light.penIcon)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeItem(index)}>
          <Entypo name="circle-with-cross" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="information-circle" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[basic.few, isDark ? (dark.background) : (light.background)]}>   {/* 根標籤 */}
      <View style={[basic.few, basic.center]}>  {/* 標題區 */}
        <Text style={[basic.title, isDark ? (dark.titleColor) : (light.titleColor)]}>代辦事項</Text>
      </View>
      <View style={[basic.func]}>  {/* 功能區 */}
        <TextInput
          style={[basic.input, basic.row, isDark ? (dark.inputBlock) : (light.inputBlock)]}
          placeholder="輸入代辦事項"
          value={word}
          onChangeText={setWord}
        />
        <View style={[basic.buttonGroup, basic.few, basic.row]}>  {/* 按鈕區 */}
          <TouchableOpacity style={[basic.button, basic.few, basic.row, isDark ? (dark.buttonBlock) : (light.buttonBlock)]} onPress={() => setIsdark(!isDark)}>
            <Ionicons name="sunny" size={30} style={isDark ? (dark.defaultIcon) : (light.sunIcon)} />
          </TouchableOpacity>
          <TouchableOpacity style={[basic.button, basic.few, basic.row, isDark ? (dark.buttonBlock) : (light.buttonBlock)]} onPress={clearList}>
            <Ionicons name="trash" size={30} style={isDark ? (dark.defaultIcon) : (light.trashIcon)} />
          </TouchableOpacity>
          <TouchableOpacity style={[basic.button, basic.few, basic.row, isDark ? (dark.buttonBlock) : (light.buttonBlock)]} onPress={addItem}>
            <Entypo name="add-to-list" size={30} style={isDark ? (dark.defaultIcon) : (light.addIcon)} />
          </TouchableOpacity>
          <TouchableOpacity style={[basic.button, basic.few, basic.row, isDark ? (dark.buttonBlock) : (light.buttonBlock)]}>
            <Text style={[basic.filterText, isDark ? (dark.buttonText) : (light.buttonText)]}>已完成</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[basic.button, basic.few, basic.row, isDark ? (dark.buttonBlock) : (light.buttonBlock)]}>
            <Text style={[basic.filterText, isDark ? (dark.buttonText) : (light.buttonText)]}>未完成</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[basic.most]}>  {/* 項目區 */}
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
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  func: {
    flex: 2,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  most: {
    flex: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    alignItems: "center",
    marginBottom: 10,
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
  },
  buttonGroup: {
    justifyContent: "center",
    alignItems: 'center',
    gap: 5,
  },
  button: {
    justifyContent: "center",
    padding: 10,
    borderRadius: 12,
    minHeight: 50
  },
  filterText: {
    fontSize: 16,
    fontWeight: "600"
  },
  item: {
    alignItems: "center",
    width: "95%",
    padding: 12,
    borderRadius: 15,
    marginVertical: 3,
    marginHorizontal: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "600"
  },
});

//深色樣式
const dark = StyleSheet.create({
  background: {
    backgroundColor: "#676565ff"
  },
  titleColor: {
    color: "#000000"
  },
  inputBlock: {
    backgroundColor: "#dadadaff",
    borderColor: "#000000ff",
  },
  buttonBlock: {
    backgroundColor: "#dededeff",
  },
  defaultIcon: {
    color: "#000000"
  },
  buttonText: {
    color: "#000"
  },
  itemBlock: {
    backgroundColor: "#dad9d9ff",
  },
  itemText: {
    color: "#000000"
  },
});

//淺色樣式
const light = StyleSheet.create({
  background: {
    backgroundColor: "#ffffffff"
  },
  titleColor: {
    color: "#2600ffff"
  },
  inputBlock: {
    backgroundColor: "#ffffff",
    borderColor: "#d5d5d5ff",
  },
  buttonBlock: {
    backgroundColor: "#ffff00",
  },
  sunIcon: {
    color: "#ff8800ff"
  },
  trashIcon: {
    color: "#00ff1aff"
  },
  addIcon: {
    color: "#cc00ffff"
  },
  buttonText: {
    color: "#ff0000ff"
  },
  itemBlock: {
    backgroundColor: "#1dffffff",
  },
  itemText: {
    color: "#ff00b7ff"
  },
  penIcon: {
    color: "#ce803bff"
  },
});
