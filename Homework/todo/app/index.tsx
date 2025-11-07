import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";

export default function Index() {
  const [list, setList] = useState<number[]>([]);
  const renderItem=()=>{
    return (
      <View></View>
    )
  };
  return (
    <View style={styles.root}>
      <View style={styles.title}>
        <Text style={styles.word}>待辦事項</Text>
      </View>
      <View style={styles.buttons}>
        <Text>0</Text>
      </View>
      <View>
        <FlatList 
        data={list}
        keyExtractor={(item,index)=>`${item} - ${index}`}
        renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    flex: 1,
    alignItems: "center"
  },
  buttons:{
    flex:2
  },
  word: {
    fontSize: 26,
    fontWeight: "700"
  }
});