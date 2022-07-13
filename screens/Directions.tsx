import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

function DirectionsScreen(){
  return(
    <View style={styles.container}>
      <Text>Directions</Text>
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