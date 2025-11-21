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
      {!isDark ? (
        <>
          <TouchableOpacity style={light.main} onPress={() => setIsDark(!isDark)}>
            <Text style={light.title}>BMI計算機</Text>
          </TouchableOpacity>
          <View style={light.func}>
            <View style={light.height}>
              <Text style={[light.inputText, light.white]}>身高:</Text>
              <TextInput placeholder="請輸入身高(公尺)" value={height} onChangeText={setHeight} style={light.input} />
            </View>
            <View style={light.weight}>
              <Text style={[light.inputText, light.white]}>體重:</Text>
              <TextInput placeholder="請輸入體重(公斤)" value={weight} onChangeText={setWeight} style={light.input} />
            </View>
            <View style={light.btns}>
              <TouchableOpacity style={light.button} onPress={clear}>
                <Text style={light.white}>清除</Text>
              </TouchableOpacity>
              <TouchableOpacity style={light.button} onPress={calculate}>
                <Text style={light.white}>計算</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={light.display}>
            <Text>{bmi}</Text>
          </View>
        </>
      ) : (
        <>
          <TouchableOpacity style={dark.main} onPress={() => setIsDark(!isDark)}>
            <Text style={dark.title}>BMI計算機</Text>
          </TouchableOpacity>
          <View style={dark.func}>
            <View style={dark.height}>
              <Text style={dark.inputText}>身高:</Text>
              <TextInput placeholder="請輸入身高(公尺)" value={height} onChangeText={setHeight} style={dark.input} />
            </View>
            <View style={dark.weight}>
              <Text style={dark.inputText}>體重:</Text>
              <TextInput placeholder="請輸入體重(公斤)" value={weight} onChangeText={setWeight} style={dark.input} />
            </View>
            <View style={dark.btns}>
              <TouchableOpacity style={dark.button} onPress={clear}>
                <Text>清除</Text>
              </TouchableOpacity>
              <TouchableOpacity style={dark.button} onPress={calculate}>
                <Text>計算</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={dark.display}>
            <Text>{bmi}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const light = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#ffff00",
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
  height: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#ff8afb",
    marginVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center"
  },
  weight: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#ff8afb",
    marginBottom: 10,
    paddingHorizontal: 12,
    alignItems: "center"
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
  btns: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aa00",
    minWidth: 80,
  },
  white: {
    color: "#fff"
  }
});

const dark = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#333333",
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
    fontWeight: "600",
    color: "#ffffff",
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
    height: 40,
    marginRight: 12
  },
  input: {
    height: 52,
  },
  btns: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#aaaaaa",
    minWidth: 80,
  },
});