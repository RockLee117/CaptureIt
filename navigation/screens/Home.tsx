import React from "react";
import { ImageBackground, Text, View, Button, StyleSheet } from "react-native";
import image from "../../assets/startScreen.png";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>

        <View style={{marginBottom: 150}}>
          <Text style={styles.title}>Capture It</Text>
        </View>

        <View style={styles.startButton}>
          <Button
            title="Start"
            onPress={() => navigation.navigate("Directions")}
          />
        </View>

      </ImageBackground>  
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    backgroundColor: "orange",
    width: 70,
    height: 40,
    marginBottom: 170
  },
  title: {
    fontSize: 30,
    color: "black" 
  }
});
