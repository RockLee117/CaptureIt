import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View style={{backgroundColor: 'orange'}}>
        <Button
          title="Go to Directions"
          onPress={() => navigation.navigate("Directions")}
        />
      </View>
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
