import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Item {
  text: string,
  done: boolean
}

export default function Index() {
  const [word, setWord] = useState("");
  const [list, setList] = useState<Item[]>([]);
  const [isDark, setIsdark] = useState(true);
  const [isfinish, setIsfinish] = useState(true);
  const [isunfinish, setIsunfinish] = useState(true);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editText, setEditText] = useState("");
  const switchDark = () => {
    setIsdark(!isDark);
  }
  const clearList = () => {
    setList([]);
  }
  const addItem = () => {
    if (word != "") {
      setList([...list, { text: word, done: false }]);
      setWord("");
    } else {
      setList([...list, { text: "某件事", done: false }]);
    }
  }
  const finish = () => {
    setIsfinish(!isfinish);
  }
  const unfinish = () => {
    setIsunfinish(!isunfinish);
  }
  const toggleDone = (index: number) => {
    setList(item =>
      item.map((it, i) => i === index ? { ...it, done: !it.done } : it))
  }
  const removeItem = (idex: number) => {
    setList(list.filter((item, i) => i != idex));
  }
  const startEdit = (index: number, currentText: string) => {
    if (!list[index].done) {
      setEditingIndex(index);
      setEditText(currentText);
    } else {
      Alert.alert("命運已定", "事已至此，忘了它吧！", [{ text: "接受命運" }]);
    }
  }
  const cancelEdit = () => {
    setEditingIndex(-1);
    setEditText("");
  }
  const confirmEdit = (index: number) => {
    if (editText.trim() !== "") {
      setList(item => item.map((it, i) => i === index ? { ...it, text: editText.trim() } : it));
      cancelEdit();
    } else {
      setList(item => item.map((it, i) => i === index ? { ...it, text: "待修改" } : it));
      cancelEdit();
    }
  }
  const filteredList = list.filter(item => {
    const isDonePressed = isfinish;
    const isUndonePressed = isunfinish;
    if (isDonePressed && isUndonePressed) {
      return true;
    }
    else if (!isDonePressed && !isUndonePressed) {
      return false;
    }
    else if (isDonePressed) {
      return item.done;
    }
    else if (isUndonePressed) {
      return !item.done;
    }
    return true;
  });
  const tag = ({ item, index }: { item: Item, index: number }) => {
    const isEditing = index === editingIndex;
    return (
      <View style={[basic.item, basic.row, isDark ? (dark.itemBlock) : (light.itemBlock)]}>
        <TouchableOpacity onPress={() => toggleDone(index)}>
          {item.done ? (<Feather name="check-circle" size={30} style={isDark ? (dark.defaultIcon) : (light.checkIcon)} />) : (<Feather name="circle" size={30} style={isDark ? (dark.defaultIcon) : (light.circleIcon)} />)}
        </TouchableOpacity>
        <View style={[basic.most, basic.row]}>
          {isEditing ? (
            <TextInput
              style={[basic.itemTitle, basic.editInput, isDark ? (dark.itemText) : (light.itemText)]}
              value={editText}
              onChangeText={setEditText}
              autoFocus={true}
              onSubmitEditing={() => confirmEdit(index)}
            />
          ) : (
            <Text style={[basic.itemTitle, (item.done ? ({ textDecorationLine: "line-through" }) : ({})), (isDark ? (dark.itemText) : (light.itemText))]}>
              {item.text}
            </Text>
          )}
        </View>
        <View style={[basic.row, basic.space]}>
          {isEditing ? (
            <TouchableOpacity onPress={cancelEdit}>
              <Entypo name="cross" size={30} style={isDark ? (dark.defaultIcon) : (light.crossIcon)} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => startEdit(index, item.text)}>
              <Entypo name="edit" size={30} style={isDark ? (dark.defaultIcon) : (light.penIcon)} />
            </TouchableOpacity>
          )}
          {isEditing ? (
            <TouchableOpacity onPress={() => confirmEdit(index)}>
              <Feather name="check" size={30} style={isDark ? (dark.defaultIcon) : (light.checkIcon)} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => removeItem(index)}>
              <Entypo name="circle-with-cross" size={30} style={isDark ? (dark.defaultIcon) : (light.crossIcon)} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  return (
    <View style={[basic.few, isDark ? (dark.background) : (light.background)]}>{/* 根標籤 */}
      <View style={[basic.few, basic.center]}>{/* 標題區 */}
        <Text style={[basic.title, isDark ? (dark.titleColor) : (light.titleColor)]}>代辦事項</Text>
      </View>
      <View style={[basic.func]}>{/* 功能區 */}
        <TextInput
          style={[basic.input, basic.row, isDark ? (dark.inputBlock) : (light.inputBlock)]}
          placeholder="輸入代辦事項"
          value={word}
          onChangeText={setWord}
        />
        <View style={[basic.buttonGroup, basic.few, basic.row, basic.center]}>{/* 按鈕區 */}
          <TouchableOpacity style={[basic.button, basic.row, isDark ? (dark.buttonBlock) : (light.buttonBlock)]} onPress={switchDark}>
            <Ionicons name="sunny" size={25} style={isDark ? (dark.defaultIcon) : (light.sunIcon)} />
          </TouchableOpacity>
          <TouchableOpacity style={[basic.button, basic.row, isDark ? (dark.buttonBlock) : (light.buttonBlock)]} onPress={clearList}>
            <Ionicons name="trash" size={25} style={isDark ? (dark.defaultIcon) : (light.trashIcon)} />
          </TouchableOpacity>
          <TouchableOpacity style={[basic.button, basic.row, isDark ? (dark.buttonBlock) : (light.buttonBlock)]} onPress={addItem}>
            <Entypo name="add-to-list" size={25} style={isDark ? (dark.defaultIcon) : (light.addIcon)} />
          </TouchableOpacity>
          <TouchableOpacity style={[basic.button, basic.few, basic.row, isDark ? (isfinish ? (dark.pressFinish) : (dark.unPressFinish)) : (isfinish ? (light.pressFinish) : (light.unPressFinish))]} onPress={finish}>
            <Text style={[basic.filterText, isDark ? (dark.buttonText) : (light.buttonText)]}>已完成</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[basic.button, basic.few, basic.row, isDark ? (isunfinish ? (dark.pressUnfinish) : (dark.unPressUnfinish)) : (isunfinish ? (light.pressUnfinish) : (light.unPressUnfinish))]} onPress={unfinish}>
            <Text style={[basic.filterText, isDark ? (dark.buttonText) : (light.buttonText)]}>未完成</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[basic.most]}>{/* 項目區 */}
        <FlatList data={filteredList} keyExtractor={(item, index) => `${item} ${index}`} renderItem={tag} />
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
    gap: 5,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    height: 55,
  },
  filterText: {
    fontSize: 14,
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
    fontWeight: "600",
    marginLeft: 10,
  },
  editInput: {
    flex: 1,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#674636"
  },
  space: {
    gap: 7
  }
});

//深色樣式
const dark = StyleSheet.create({
  background: {
    backgroundColor: "#000000ff"
  },
  titleColor: {
    color: "#b5caa1"
  },
  inputBlock: {
    backgroundColor: "#263926",
    borderColor: "#b5caa1",
  },
  buttonBlock: {
    backgroundColor: "#dae9d2",
  },
  pressFinish: {
    backgroundColor: "#dae9d2",
    borderColor: "#b5caa1",
    borderWidth: 2
  },
  unPressFinish: {
    backgroundColor: "#6a8e74"
  },
  pressUnfinish: {
    backgroundColor: "#dae9d2",
    borderColor: "#b5caa1",
    borderWidth: 2
  },
  unPressUnfinish: {
    backgroundColor: "#6a8e74"
  },
  defaultIcon: {
    color: "#263926"
  },
  buttonText: {
    color: "#263926"
  },
  itemBlock: {
    backgroundColor: "#6a8e74",
  },
  itemText: {
    color: "#263926"
  },
});

//淺色樣式
const light = StyleSheet.create({
  background: {
    backgroundColor: "#f9edd7"
  },
  titleColor: {
    color: "#614a44"
  },
  inputBlock: {
    backgroundColor: "#a9c9c4",
    borderColor: "#614a44"
  },
  buttonBlock: {
    backgroundColor: "#614a44"
  },
  pressFinish: {
    backgroundColor: "#614a44"
  },
  unPressFinish: {
    backgroundColor: "#f9edd7",
    borderColor: "#614a44",
    borderWidth: 2
  },
  pressUnfinish: {
    backgroundColor: "#614a44"
  },
  unPressUnfinish: {
    backgroundColor: "#f9edd7",
    borderColor: "#614a44",
    borderWidth: 2
  },
  sunIcon: {
    color: "#f9edd7"
  },
  trashIcon: {
    color: "#a9c9c4"
  },
  addIcon: {
    color: "#f9edd7"
  },
  buttonText: {
    color: "#a9c9c4"
  },
  itemBlock: {
    backgroundColor: "#a9c9c4"
  },
  circleIcon: {
    color: "#614a44"
  },
  checkIcon: {
    color: "#614a44"
  },
  itemText: {
    color: "#614a44"
  },
  penIcon: {
    color: "#614a44"
  },
  crossIcon: {
    color: "#614a44"
  },
});