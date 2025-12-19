import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const [title, setTitle] = useState('');
  const [display, setDisplay] = useState('');
  const [isload, setIsload] = useState(false);
  const save = async () => {
    try {
      const s = await AsyncStorage.setItem('titleData', display);
    } catch (error) {
      console.error('存不了', error)
    }
  }
  const load = async () => {
    try {
      const s = await AsyncStorage.getItem('titleData');
      if (s != null) setDisplay(s);
    } catch (error) {
      console.error('不可讀', error)
    }
    setIsload(true);
  }
  useEffect(() => {
    if (isload) save();
  }, [display]);
  useEffect(() => {
    load();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", margin: 10, gap: 10 }}>
      <Text>名稱:</Text>
      <TextInput placeholder='取名:' style={style.it} value={title} onChangeText={setTitle} />
      <Text style={style.word}>{display}</Text>
      <TouchableOpacity onPress={() => setDisplay(title)}>
        <Text>確定</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  it: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 10,
    width: 250,
  },
  word: {
    fontSize: 30,
  }
});