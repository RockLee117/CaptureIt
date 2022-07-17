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
  menuButton: {
    width: 150,
    height: 40,
    backgroundColor: "black",
  },
  modal: {
    justifyContent: "center",
    marginTop: 22,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  resume: {
    marginBottom: 15,
    textAlign: "center",
  },
});
