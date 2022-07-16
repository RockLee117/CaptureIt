import React from 'react';
import {ImageBackground, Text, View, Button, StyleSheet} from 'react-native';
import image from "../../assets/directionsScreen.png";

function DirectionsScreen({navigation}){
  return(
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>

        <Text style={{marginBottom: 460, fontSize: 20, alignItems: 'center', color: 'white'}}>
          Directions: take a picture of the item/object listed on the screen
        </Text>
        <View style={styles.backButton}>
          <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.playButton}>
          <Button title="Play" onPress={() => navigation.navigate('Play Game')} />
        </View>

      </ImageBackground>
    </View>
  );
}
export default DirectionsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButton: {
      marginRight: 200,
      marginTop: 30,
      width: 100,
      height: 50,
      backgroundColor: 'red'
    },
    playButton: {
      marginLeft: 200,
      width: 100,
      height: 50,
      backgroundColor: 'lime'
    },
    image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
});