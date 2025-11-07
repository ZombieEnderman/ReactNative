import {useState} from "react";
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";

export default function Index() {
    const [num, setnum] = useState(9998);
    const fournum = (n: number) => String(n).padStart(4, "0");
    return (
        <View style={css.root}>
            {/* 數值顯示區 */}
            <View style={[css.some, css.btn, css.display]}>
                <Text style={[css.bigword, css.cmdtext, css.bold, css.txtinterval]}>{fournum(num)}</Text>
            </View>
            {/* 按鈕區 */}
            <View style={[css.most]}>
                <View style={[css.row, css.interval]}>
                    <TouchableOpacity style={[css.btn, css.colorA]} onPress={() => (num < 9999 ? setnum(num + 1) : num)}>
                        <Text style={css.mdword}>+1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[css.btn, css.colorC]} onPress={() => setnum(0)}>
                        <Text style={css.mdword}>歸零</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[css.btn, css.colorB]} onPress={() => (num > 0 ? setnum(num - 1) : num)}>
                        <Text style={css.mdword}>-1</Text>
                    </TouchableOpacity>
                </View>
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
        marginTop: 30,
        marginBottom: 20,
        maxHeight:120
    },
    some: {
        flex: 1,
    },
    most: {
        flex: 4,
    },
    row: {
        flexDirection: "row",
    },
    bigword: {
        fontSize: 50,
    },
    mdword: {
        fontSize: 40,
    },
    cmdtext: {
        color: "#ffffffff",
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        minWidth: 100,
    },
    bold: {
        fontWeight: "600",
    },
    txtinterval: {
        letterSpacing: 15,
    },
    interval: {
        justifyContent: "center",
        gap: 12,
    },
    colorA: {
        backgroundColor: "#3399ddff",
    },
    colorB: {
        backgroundColor: "#4477ffff",
    },
    colorC: {
        backgroundColor: "#76d1d6",
    },
});
