import {Text, View, StyleSheet} from "react-native";
export default function ModalScreen() {
    return (
        <View style={css.aa}>
            <View style={css.aa}>
                <Text style={[css.size, css.red, css.center, css.weight, css.cc, css.byello]}>Python</Text>
                <Text style={[css.size, css.red, css.center, css.weight, css.bb]}>JavaScript</Text>
                <Text style={[css.size, css.red, css.center, css.weight, css.cc, css.byello]}>Ruby</Text>
            </View>
            <View style={css.dd}>
                <Text style={[css.size, css.red, css.center, css.weight, css.bb]}>C#</Text>
                <Text style={[css.size, css.red, css.center, css.weight, css.cc]}>Java</Text>
            </View>
        </View>
    );
}
const css = StyleSheet.create({
    aa: {
        flex: 1,
    },
    bb: {
        flex: 1,
        backgroundColor: "#00ff00",
    },
    cc: {
        flex: 2,
        backgroundColor: "#00e1ffff",
    },
    dd: {
        flex: 1,
        flexDirection: "row",
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
