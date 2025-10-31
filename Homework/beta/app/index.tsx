import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
  const [single, setsingle] = useState(0);
  const [tens, settens] = useState(0);
  const [hundreds, sethundreds] = useState(0);
  const [thousands, setthousands] = useState(0);
  return (
    <View style={css.root}>
      {/* 數值顯示區 */}
      <View style={[css.some, css.btn, css.display]}>
        <Text style={[css.bigword, css.cmdtext, css.bold, css.interval]}>
          {thousands}
          {hundreds}
          {tens}
          {single}
        </Text>
      </View>
      {/* 按鈕區 */}
      <View style={css.medium}>
        <TouchableOpacity style={[css.btn, css.colorA]}>
          <Text style={css.mdword}>???</Text>
        </TouchableOpacity>
      </View>
      {/* 清單區 */}
      <View style={css.most}>
        <Text style={[css.small, css.bold]}>歷史紀錄</Text>
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  display: {
    backgroundColor: "#000000",
    marginTop: 40,
  },
  some: {
    flex: 1,
  },
  medium: {
    flex: 2,
  },
  most: {
    flex: 4,
  },
  bigword: {
    fontSize: 50,
  },
  mdword: {
    fontSize: 40,
  },
  small: {
    fontSize: 20,
  },
  cmdtext: {
    color: "#00ff00",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  bold: {
    fontWeight: "600",
  },
  interval: {
    letterSpacing: 15,
  },
  colorA: {
    backgroundColor: "#dd0",
  },
});
