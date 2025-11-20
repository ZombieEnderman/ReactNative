import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.main}>
        <Text style={styles.title}>BMI計算機</Text>
      </View>
      <View style={styles.func}>
        <View style={styles.height}>
          <Text style={styles.inputText}>身高:</Text>
          <TextInput placeholder="請輸入身高(公尺)" />
        </View>
        <View style={styles.weight}>
          <Text style={styles.inputText}>體重:</Text>
          <TextInput placeholder="請輸入體重(公斤)" />
        </View>
      </View>
      <View style={styles.display}>
        <Text>???</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#ffff00",
    minWidth: 180,
    alignItems: "center",
    justifyContent: "center"
  },
  func: {
    flex: 2,
  },
  display: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "600"
  },
  height: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#cacacaff",
    marginVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center"
  },
  weight: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#cacacaff",
    marginBottom: 10,
    paddingHorizontal: 12,
    alignItems: "center"
  },
  inputText: {
    fontSize: 20,
    fontWeight: "500",
    marginRight: 12
  },
});