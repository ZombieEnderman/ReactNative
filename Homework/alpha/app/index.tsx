import {Text, View, StyleSheet} from "react-native";

export default function Index() {
    return (
        <View style={css.root}>
            <View style={css.display}></View>
            <View style={css.func}>
                <View style={css.row}>
                    <Text style={[css.btntxt, css.col, css.colorA]}>√</Text>
                    <Text style={[css.btntxt, css.col, css.colorA]}>±</Text>
                    <Text style={[css.btntxt, css.col, css.colorA]}>%</Text>
                    <Text style={[css.btntxt, css.col, css.colorA]}>÷</Text>
                </View>
                <View style={css.row}>
                    <Text style={[css.btntxt, css.col, css.colorB]}>7</Text>
                    <Text style={[css.btntxt, css.col, css.colorB]}>8</Text>
                    <Text style={[css.btntxt, css.col, css.colorB]}>9</Text>
                    <Text style={[css.btntxt, css.col, css.colorA]}>x</Text>
                </View>
                <View style={css.row}>
                    <Text style={[css.btntxt, css.col, css.colorB]}>4</Text>
                    <Text style={[css.btntxt, css.col, css.colorB]}>5</Text>
                    <Text style={[css.btntxt, css.col, css.colorB]}>6</Text>
                    <Text style={[css.btntxt, css.col, css.colorA]}>-</Text>
                </View>
                <View style={css.row}>
                    <Text style={[css.btntxt, css.col, css.colorB]}>1</Text>
                    <Text style={[css.btntxt, css.col, css.colorB]}>2</Text>
                    <Text style={[css.btntxt, css.col, css.colorB]}>3</Text>
                    <Text style={[css.btntxt, css.col, css.colorA]}>+</Text>
                </View>
                <View style={css.row}>
                    <Text style={[css.btntxt, css.col, css.colorC]}>AC</Text>
                    <Text style={[css.btntxt, css.col, css.colorB]}>0</Text>
                    <Text style={[css.btntxt, css.col, css.colorB]}>.</Text>
                    <Text style={[css.btntxt, css.col, css.colorC]}>=</Text>
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
        flex: 1,
    },
    btntxt: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 23,
        fontWeight: "700",
        margin: 10,
        borderRadius: 120,
        height: 64,
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
});
