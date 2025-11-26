import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons';

export default function Index() {
  return (
    <View style={[basic.few]}>   {/* 根標籤 */}
      <View style={[basic.few]}></View>   {/* 標題區 */}
      <View style={[basic.func]}>   {/* 功能區 */}
        <Entypo name="add-to-list" size={30} color="black" />  {/* 添加 */}
      </View>
      <View style={[basic.most]}>   {/* 項目區 */}
        <Entypo name="edit" size={30} color="black" />  {/* 編輯 */}
        <Entypo name="circle-with-cross" size={30} color="black" />  {/* 刪除 */}
        <Ionicons name="information-circle" size={30} color="black" />  {/* 詳細資訊 */}
      </View>
    </View>
  );
}

//共通性樣式
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