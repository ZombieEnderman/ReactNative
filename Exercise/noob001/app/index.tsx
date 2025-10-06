import {Text, View, StyleSheet} from "react-native";
export default function ModalScreen() {
    return (
        <View style={css.dd}>
            <View style={css.cc}>
                <View style={css.aa}>
                    <Text style={[css.size, css.red, css.center, css.weight, css.cc, css.bblue]}>Python</Text>
                    <Text style={[css.size, css.red, css.center, css.weight, css.byello, css.aa]}>JavaScript</Text>
                    <Text style={[css.size, css.red, css.center, css.weight, css.cc, css.bgreen]}>Ruby</Text>
                </View>
                <View style={css.dd}>
                    <Text style={[css.size, css.black, css.center, css.weight, css.bpurple, css.aa]}>C#</Text>
                    <Text style={[css.size, css.blue, css.center, css.weight, css.aa, css.borange]}>Java</Text>
                </View>
            </View>
            <View style={css.aa}>
                <View style={css.aa}></View>
                <View style={css.cc}>
                    <Text style={[css.size, css.red, css.weight, css.center, css.ball]}>F</Text>
                    <Text style={[css.size, css.red, css.weight, css.center, css.ball]}>U</Text>
                    <Text style={[css.size, css.red, css.weight, css.center, css.ball]}>C</Text>
                    <Text style={[css.size, css.red, css.weight, css.center, css.ball]}>k</Text>
                </View>
            </View>
        </View>
    );
}
const css = StyleSheet.create({
    aa: {
        flex: 1,
    },
    bgreen: {
        backgroundColor: "#00ff00",
    },
    cc: {
        flex: 2,
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
    blue: {
        color: "#2d2dffff",
    },
    black: {
        color: "#000000",
    },
    center: {
        textAlign: "center",
    },
    byello: {
        backgroundColor: "#ffff00",
    },
    bblue: {
        backgroundColor: "#00e1ffff",
    },
    bpurple: {
        backgroundColor: "#cc20e2ff",
    },
    borange: {
        backgroundColor: "#e76400ff",
    },
    weight: {
        fontWeight: 800,
    },
    ball: {
        backgroundColor: "#b0b0b0ff",
        borderRadius: 50,
        width: 50,
        height: 50,
        marginLeft: 200
    }
});
