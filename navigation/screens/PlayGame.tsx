import React, { useState } from "react";
import { Pressable, Modal, Text, View, Button, StyleSheet } from "react-native";
import ModalMenu from "../../components/ModalMenu";


function PlayGameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ModalMenu navigation={navigation} />

      <Text>Score:</Text>

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
