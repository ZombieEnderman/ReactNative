import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Index() {
  const [word, setWord] = useState(false);
  const change = () => {
    const newword = !word;
    setWord(newword);
    const title = newword ? ("燈亮了") : ("燈滅了");
    const message = newword ? ("誰說你可以按的!") : ("就叫你別按了!");
    Alert.alert(title, message, [{ text: "好喔", style: "cancel" }, { text: "不要阿", style: "destructive", onPress: change }]);
  }
  return (
    <View style={[styles.center, styles.some]}>
      <View style={[styles.center, styles.most]}>
        <MaterialCommunityIcons name="lightbulb" size={100} color={word ? ("#0f0") : ("#f00")} />
      </View>
      <TouchableOpacity style={styles.some} onPress={change}>
        <Text style={styles.big}>別亂按!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  some: {
    flex: 1
  },
  most: {
    flex: 2
  },
  big: {
    fontSize: 30,
    fontWeight: '700'
  },
});