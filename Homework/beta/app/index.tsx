import {useState} from "react";
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";

export default function Index() {
    const [single, setsingle] = useState(0);
    const [tens, settens] = useState(0);
    const [hundreds, sethundreds] = useState(0);
    const [thousands, setthousands] = useState(0);
    return (
        <View style={css.root}>
            <View style={[css.some, css.btn]}>
                <Text style={[css.bigword, css.cmdtext]}>{thousands} {hundreds} {tens} {single}</Text>
            </View>
            <View style={css.most}>
                <Text style={css.bigword}>???</Text>
            </View>
        </View>
    );
}

const css = StyleSheet.create({
    root: {
        flex: 1,
        padding: 20,
    },
    some: {
        flex: 1,
        backgroundColor: "#000000",
        marginTop: 40,
    },
    most: {
        flex: 3,
    },
    bigword: {
        fontSize: 50,
    },
    cmdtext: {
        color: "#00ff00",
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
});
