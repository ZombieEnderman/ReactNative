import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";

export default function Index() {
  const [height, setHeight] = useState("0");
  const [weight, setWeight] = useState("0");
  const [bmi, setBMI] = useState("0");
  const [isDark, setIsDark] = useState(false);
  const clear = () => {
    setHeight("");
    setWeight("");
    setBMI("");
  };
  const calculate = () => {
    let h = Number(height);
    let w = Number(weight);
    let b = w / (h ** 2);
    if (isNaN(b)) {
      setBMI("請輸入有效數值!");
    } else {
      setBMI(b.toFixed(2).toString());
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TouchableOpacity style={[basic.main, !isDark ? (light.yellow) : (dark.darkGray)]} onPress={() => setIsDark(!isDark)}>
        <Text style={[basic.title, !isDark ? (dark.black) : (light.white)]}>BMI計算機</Text>
      </TouchableOpacity>
      <View style={basic.func}>
        <View style={[basic.container, !isDark ? (light.pink) : (dark.lightGray)]}>
          <Text style={[basic.inputText, !isDark ? (light.white) : (dark.black)]}>身高:</Text>
          <TextInput placeholder="請輸入身高(公尺)" value={height} onChangeText={setHeight} style={basic.input} />
        </View>
        <View style={[basic.container, !isDark ? (light.pink) : (dark.lightGray)]}>
          <Text style={[basic.inputText, !isDark ? (light.white) : (dark.black)]}>體重:</Text>
          <TextInput placeholder="請輸入體重(公斤)" value={weight} onChangeText={setWeight} style={basic.input} />
        </View>
        <View style={basic.btns}>
          <TouchableOpacity style={[basic.button, !isDark ? (light.green) : (dark.gray)]} onPress={clear}>
            <Text style={[light.white, !isDark ? (light.white) : (dark.black)]}>清除</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[basic.button, !isDark ? (light.green) : (dark.gray)]} onPress={calculate}>
            <Text style={[light.white, !isDark ? (light.white) : (dark.black)]}>計算</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={basic.display}>
        <Text>{bmi}</Text>
      </View>
    </View>
  );
}

const basic = StyleSheet.create({
  main: {
    flex: 1,
    minWidth: 180,
    alignItems: "center",
    justifyContent: "center"
  },
  func: {
    flex: 1,
  },
  display: {
    flex: 2,
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "600"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center"
  },
  btns: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  inputText: {
    fontSize: 20,
    fontWeight: "500",
    height: 40,
    marginRight: 12
  },
  input: {
    height: 52,
  },
  button: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 80,
  },
});

const light = StyleSheet.create({
  yellow: {
    backgroundColor: "#ffff00"
  },
  pink: {
    backgroundColor: "#ff8afb"
  },
  green: {
    backgroundColor: "#00aa00"
  },
  white: {
    color: "#fff"
  }
});

const dark = StyleSheet.create({
  darkGray: {
    backgroundColor: "#333333"
  },
  lightGray: {
    backgroundColor: "#cacacaff"
  },
  gray: {
    backgroundColor: "#aaaaaa"
  },
  black: {
    color: "#000000"
  }
});