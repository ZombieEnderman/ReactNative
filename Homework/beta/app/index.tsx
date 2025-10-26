import {useState} from "react";
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";

export default function Index() {
    return (
        <View style={css.some}>
            <View style={css.some}>
                <Text style={css.bigword}>0</Text>
            </View>
            <View style={css.most}>
                <Text style={css.bigword}>???</Text>
            </View>
        </View>
    );
}

const css = StyleSheet.create({
    some: {
        flex: 1,
    },
    most: {
        flex: 3,
    },
    bigword: {
        fontSize: 30,
    },
});
