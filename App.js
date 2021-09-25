import React, { useState } from "react";
import { Button, Platform, Text, Vibration, View, SafeAreaView, StyleSheet, Alert } from "react-native";
import { Audio } from 'expo-av';


const Separator = () => {
  return <View style={Platform.OS === "android" ? styles.separator : null} />;
}

const App = () => {

  const playAudio = () => {
 // it should be async function .
  (async () => {
         const play_yes = await Audio.Sound.createAsync(
         require('./assets/iphone.mp3'),
                        { shouldPlay: true }
                        );
                })();
                }

 const createThreeButtonAlert = () =>
    Alert.alert(
      "Notification mode",
      "Choose Vibrate or Play sound to enjoy",
      [
       {
                 text: "Vibrateeeee",
                 onPress: () =>  Vibration.vibrate()
               },
               { text: "Play sound",
                 onPress: (playAudio)},
               {
                 text: "Cancel",
                 onPress: () => console.log("Cancel Pressed"),
                 style: "cancel"
               }
      ]
    );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, styles.paragraph]}>Notification API</Text>
          <View>
            <Button title={"Select Alert"} onPress={createThreeButtonAlert} />
                  </View>
      <Separator />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 44,
    padding: 8
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  paragraph: {
    margin: 24,
    textAlign: "center"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

export default App;