//https://docs.expo.dev/versions/latest/sdk/camera/

import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import flipArrowPic from '../assets/flip.png';

export default function CameraAccess() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  let [cameraReady, setCameraReady] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera. Go to your settings and allow Expo Go permission to access camera.</Text>;
  }
  //if cameraReady true, camera takes picture
  if(cameraReady === true){

  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          {/* this touchable opacity flips the camera */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);
            }}>
            <Image source={flipArrowPic} style={styles.arrow}/>
          </TouchableOpacity>
          
          {/* this touchable opacity takes the picture */}
          <TouchableOpacity
            style={styles.picButton}
            onPress={() => {
              setCameraReady(cameraReady = true);
            }}
          >

          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  picButton: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 600,
    marginLeft: 100
  },
  arrow: {
    width: 50,
    height: 50,
    marginBottom: 60,
  },
});