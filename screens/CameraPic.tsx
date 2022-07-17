import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import CameraAccess from "../components/CameraAccess";

export default function CameraPic({ navigation }){
    return(
        <View style={styles.container}>
            <CameraAccess />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})