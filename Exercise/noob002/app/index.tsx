import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ModalScreen() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(1);
  return (
    <View>
      <Text style={css.txt}>
        {x}{y}{x}{y}{x}{y}{x}{y}{x}{y}{x}{y}{x}{y}{x}{y}
      </Text>
      <Text style={css.txt}>
        {y}{x}{y}{x}{y}{x}{y}{x}{y}{x}{y}{x}{y}{x}{y}{x}
      </Text>
      <Text style={css.txt}>
        {x}{y}{x}{y}{x}{y}{x}{y}{x}{y}{x}{y}{x}{y}{x}{y}
      </Text>
      <Text style={css.txt}>
        {y}{x}{y}{x}{y}{x}{y}{x}{y}{x}{y}{x}{y}{x}{y}{x}
      </Text>
      <View style={css.dp}>
        <TouchableOpacity style={css.ntn} onPress={() => { setX(1); setY(0) }}>
          <Text style={css.txt}>!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.ntn} onPress={() => { setX(0); setY(1) }}>
          <Text style={css.txt}>???</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const css = StyleSheet.create({
    txt: {
        fontSize: 30,
        marginLeft: 20,
    },
    ntn: {
        backgroundColor: "#00ffff",
        width: 100,
        margin: 20,
    },
    dp: {
        flexDirection: "row",
    },
});