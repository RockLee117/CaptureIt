import React, { useState } from "react";
import { Pressable, Modal, Text, View, Button, StyleSheet } from "react-native";

function ModalMenu({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.modal}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* the resume pressable closes the modal */}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Resume</Text>
              </Pressable>

              {/* the quit pressable returns back to the start screen */}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => navigation.navigate("Home")}
              >
                <Text>Quit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.menuButton}>
        <Button title="Menu" onPress={() => setModalVisible(true)} />
      </View>
    </>
  );
}
export default ModalMenu;

const styles = StyleSheet.create({
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
