import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

function DirectionsScreen({navigation}){
  return(
    <View style={styles.container}>
      <Text>Directions</Text>
      <Button title="Play" onPress={() => navigation.navigate('Play Game')} />
      <Button title="Back" onPress={() => navigation.goBack()} />
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
    }
});