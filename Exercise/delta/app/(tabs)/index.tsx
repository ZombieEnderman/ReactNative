import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Linking } from "react-native";

export default function Index() {
  return (
    <View style={[styles.center, styles.one, styles.sp]}>
      <TouchableOpacity style={styles.center} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1')}>
        <Text style={styles.big}>跳舞</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  one: {
    flex: 1
  },
  two: {
    flex: 2
  },
  big: {
    fontSize: 30,
    fontWeight: '700'
  },
  sp: {
    gap: 20
  }
});