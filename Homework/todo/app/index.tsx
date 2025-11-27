import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons';

export default function Index() {
  const [word, setWord] = useState("");
  const [list, setList] = useState([]);
  return (
    <View style={[basic.few]}>   {/* 根標籤 */}
      <View style={[basic.few]}></View>   {/* 標題區 */}
      <View style={[basic.func]}>   {/* 功能區 */}
        <Entypo name="add-to-list" size={30} color="black" />  {/* 添加icon */}
      </View>
      <View style={[basic.most]}>   {/* 項目區 */}
        <Entypo name="edit" size={30} color="black" />  {/* 編輯icon */}
        <Entypo name="circle-with-cross" size={30} color="black" />  {/* 刪除icon */}
        <Ionicons name="information-circle" size={30} color="black" />  {/* 詳細資訊icon */}
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
    flex: 2
  },
  most: {
    flex: 5
  },
});

//深色樣式
const dark = StyleSheet.create({});

//淺色樣式
const light = StyleSheet.create({});