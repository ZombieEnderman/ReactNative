import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";

export default function Index() {
  return (
    <View style={[basic.few]}>   {/* 根標籤 */}
      <View style={[basic.few]}></View>   {/* 標題區 */}
      <View style={[basic.func]}></View>   {/* 功能區 */}
      <View style={[basic.most]}></View>   {/* 項目區 */}
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