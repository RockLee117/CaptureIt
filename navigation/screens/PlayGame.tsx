import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import ModalMenu from "../../components/ModalMenu";
import CameraAccess from "../../components/CameraAccess";

function PlayGameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ModalMenu navigation={navigation} />

      <Text>Score:</Text>

      <CameraAccess />

      <View style={styles.picButton}>
        <Button title="Take Picture" />
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
});
