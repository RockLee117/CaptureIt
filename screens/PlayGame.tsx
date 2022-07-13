import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

function PlayGameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Play Game</Text>
    </View>
  );
}
export default PlayGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});