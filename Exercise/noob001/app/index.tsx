import { Text, View, StyleSheet } from "react-native";
export default function ModalScreen() {
  return (
    <View style={css.aa}>
      <Text style={[css.size, css.red, css.center, css.weight, css.cc]}>
        Python
      </Text>
      <Text style={[css.size, css.red, css.center, css.weight, css.aa]}>
        JavaScript
      </Text>
      <Text style={[css.size, css.red, css.center, css.weight, css.aa]}>
        Ruby
      </Text>
    </View>
  );
}
const css = StyleSheet.create({
  aa: {
    flex: 1,
  },
  cc: {
    flex: 2,
  },
  size: {
    fontSize: 30,
  },
  red: {
    color: "#ff0000",
  },
  center: {
    textAlign: "center",
  },
  byello: {
    backgroundColor: "#ffff00",
  },
  weight: {
    fontWeight: 800,
  },
});
