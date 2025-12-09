import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, Alert } from "react-native";
import { Ionicons, Entypo, Feather } from '@expo/vector-icons';

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
    setList(prev =>
      prev.map((it, i) => i === index ? { ...it, done: !it.done } : it))
  }
  const removeItem = (idex: number) => {
    setList(list.filter((item, i) => i != idex));
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
  const tag = ({ item, index }: { item: Item, index: number }) => (
    <View style={[basic.item, basic.row, isDark ? (dark.itemBlock) : (light.itemBlock)]}>
      <TouchableOpacity onPress={() => toggleDone(index)}>
        {item.done ? (<Feather name="check-circle" size={30} style={isDark ? (dark.defaultIcon) : (light.checkIcon)} />) : (<Feather name="circle" size={30} style={isDark ? (dark.defaultIcon) : (light.circleIcon)} />)}
      </TouchableOpacity>
      <View style={[basic.most, basic.row]}>
        <Text style={[basic.itemTitle, (item.done ? ({ textDecorationLine: "line-through" }) : ({})), (isDark ? (dark.itemText) : (light.itemText))]}>{item.text}</Text>
      </View>
      <View style={[basic.row]}>
        <TouchableOpacity>
          <Entypo name="edit" size={30} style={isDark ? (dark.defaultIcon) : (light.penIcon)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeItem(index)}>
          <Entypo name="circle-with-cross" size={30} style={isDark ? (dark.defaultIcon) : (light.crossIcon)} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="information-circle" size={30} style={isDark ? (dark.defaultIcon) : (light.informationIcon)} />
        </TouchableOpacity>
      </View>
    </View>
  );
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
  pressFinish: {
    backgroundColor: "#eee7e7ff",
    borderColor: "#000000ff",
    borderWidth: 2
  },
  unPressFinish: {
    backgroundColor: "#eee7e7ff"
  },
  pressUnfinish: {
    backgroundColor: "#eee7e7ff",
    borderColor: "#000000ff",
    borderWidth: 2
  },
  unPressUnfinish: {
    backgroundColor: "#eee7e7ff"
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
    borderColor: "#d5d5d5ff"
  },
  buttonBlock: {
    backgroundColor: "#fbfb7aff"
  },
  pressFinish: {
    backgroundColor: "#00ff00"
  },
  unPressFinish: {
    backgroundColor: "#eee7e7ff",
    borderColor: "#00ff00",
    borderWidth: 2
  },
  pressUnfinish: {
    backgroundColor: "#ff0000"
  },
  unPressUnfinish: {
    backgroundColor: "#eee7e7ff",
    borderColor: "#ff0000",
    borderWidth: 2
  },
  sunIcon: {
    color: "#ff8800ff"
  },
  trashIcon: {
    color: "#747474ff"
  },
  addIcon: {
    color: "#cc00ffff"
  },
  buttonText: {
    color: "#0062ffff"
  },
  itemBlock: {
    backgroundColor: "#1dffffff"
  },
  circleIcon: {
    color: "#ff0000"
  },
  checkIcon: {
    color: "#00aa00"
  },
  itemText: {
    color: "#ff00b7ff"
  },
  penIcon: {
    color: "#ce803bff"
  },
  crossIcon: {
    color: "#ff0000"
  },
  informationIcon: {
    color: "#0000ff"
  },
});
