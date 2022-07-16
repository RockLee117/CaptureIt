import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

function PlayGameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.menuButton}>
          <Button title="Menu"  />
      </View>
      
      <Text>
        Score: 
      </Text>

      <View style={styles.picButton}>
          <Button title="Take Picture"  />
      </View>
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
  picButton: {
    width: 150,
    height: 40,
    backgroundColor: "orange",
  },
  menuButton: {
    width: 150,
    height: 40,
    backgroundColor: "black",
  }
});