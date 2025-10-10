import {Text, View, StyleSheet} from "react-native";

export default function Index() {
    return (
        <View style={css.root}>
            <View style={css.display}></View>
            <View style={css.func}>
                <View style={css.row}>
                    <Text style={[css.btntxt, css.col]}>AC</Text>
                    <Text style={[css.btntxt, css.col]}>±</Text>
                    <Text style={[css.btntxt, css.col]}>%</Text>
                    <Text style={[css.btntxt, css.col]}>÷</Text>
                </View>
                <View style={css.row}>
                    <Text style={[css.btntxt, css.col]}>7</Text>
                    <Text style={[css.btntxt, css.col]}>8</Text>
                    <Text style={[css.btntxt, css.col]}>9</Text>
                    <Text style={[css.btntxt, css.col]}>x</Text>
                </View>
                <View style={css.row}>
                    <Text style={[css.btntxt, css.col]}>4</Text>
                    <Text style={[css.btntxt, css.col]}>5</Text>
                    <Text style={[css.btntxt, css.col]}>6</Text>
                    <Text style={[css.btntxt, css.col]}>-</Text>
                </View>
                <View style={css.row}>
                    <Text style={[css.btntxt, css.col]}>1</Text>
                    <Text style={[css.btntxt, css.col]}>2</Text>
                    <Text style={[css.btntxt, css.col]}>3</Text>
                    <Text style={[css.btntxt, css.col]}>+</Text>
                </View>
                <View style={css.row}>
                    <Text style={[css.btntxt, css.col]}>√</Text>
                    <Text style={[css.btntxt, css.col]}>0</Text>
                    <Text style={[css.btntxt, css.col]}>.</Text>
                    <Text style={[css.btntxt, css.col]}>=</Text>
                </View>
            </View>
        </View>
    );
}

const css = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#000000",
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
        fontSize: 30,
        fontWeight: "700",
    },
});
