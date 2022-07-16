import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

function DirectionsScreen({navigation}){
  return(
    <View style={styles.container}>
      <Text>Directions</Text>
      <View style={styles.backButton}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.playButton}>
        <Button title="Play" onPress={() => navigation.navigate('Play Game')} />
      </View>
    </View>
  );
}
export default DirectionsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
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
    }
});