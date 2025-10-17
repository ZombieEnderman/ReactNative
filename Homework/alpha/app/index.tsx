import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={css.root}>
      <View style={css.display}>
        <View style={css.col}></View>
        <Text style={[css.display, css.txt]}>0</Text>
      </View>
      <View style={css.func}>
        <View style={css.row}>
          <View style={[css.btn, css.colorA]}>
            <Text style={css.btntxt}>√</Text>
          </View>
          <View style={[css.btn, css.colorA]}>
            <Text style={css.btntxt}>±</Text>
          </View>
          <View style={[css.btn, css.colorA]}>
            <Text style={css.btntxt}>%</Text>
          </View>
          <View style={[css.btn, css.colorA]}>
            <Text style={css.btntxt}>÷</Text>
          </View>
        </View>
        <View style={css.row}>
          <View style={[css.btn, css.colorB]}>
            <Text style={css.btntxt}>7</Text>
          </View>
          <View style={[css.btn, css.colorB]}>
            <Text style={css.btntxt}>8</Text>
          </View>
          <View style={[css.btn, css.colorB]}>
            <Text style={css.btntxt}>9</Text>
          </View>
          <View style={[css.btn, css.colorA]}>
            <Text style={css.btntxt}>x</Text>
          </View>
        </View>
        <View style={css.row}>
          <View style={[css.btn, css.colorB]}>
            <Text style={css.btntxt}>4</Text>
          </View>
          <View style={[css.btn, css.colorB]}>
            <Text style={css.btntxt}>5</Text>
          </View>
          <View style={[css.btn, css.colorB]}>
            <Text style={css.btntxt}>6</Text>
          </View>
          <View style={[css.btn, css.colorA]}>
            <Text style={css.btntxt}>-</Text>
          </View>
        </View>
        <View style={css.row}>
          <View style={[css.btn, css.colorB]}>
            <Text style={css.btntxt}>1</Text>
          </View>
          <View style={[css.btn, css.colorB]}>
            <Text style={css.btntxt}>2</Text>
          </View>
          <View style={[css.btn, css.colorB]}>
            <Text style={css.btntxt}>3</Text>
          </View>
          <View style={[css.btn, css.colorA]}>
            <Text style={css.btntxt}>+</Text>
          </View>
        </View>
        <View style={css.row}>
          <View style={[css.btn, css.colorC]}>
            <Text style={css.btntxt}>AC</Text>
          </View>
          <View style={[css.btn, css.colorB]}>
            <Text style={css.btntxt}>0</Text>
          </View>
          <View style={[css.btn, css.colorB]}>
            <Text style={css.btntxt}>.</Text>
          </View>
          <View style={[css.btn, css.colorC]}>
            <Text style={css.btntxt}>=</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffffff",
  },
  func: {
    flex: 2,
    padding: 30,
  },
  display: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  col: {
    flex: 3,
  },
  btn: {
    margin: 10,
    borderRadius: 120,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
  },
  btntxt: {
    color: "#ffffff",
    fontSize: 23,
    fontWeight: "700",
    textAlign: "center",
  },
  colorA: {
    backgroundColor: "#ffa869ff",
  },
  colorB: {
    backgroundColor: "#d599f7ff",
  },
  colorC: {
    backgroundColor: "#98d9f5ff",
  },
  txt: {
    fontSize: 30,
    textAlign: "right",
    paddingRight: 30,
  },
});
