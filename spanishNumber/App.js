import React from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';

const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#101010'
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginVertical: 30
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-around",
    alignItems: "flex-start",
    margin: 5,
    marginBottom: 50
  },
  box: {
    height: 110,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    backgroundColor: "#0f4c75",
    borderRadius: 10,
    shadowColor: "#393e46",
    elevation: 10
  },
  text: {
    fontSize: 50,
    color: "#ffffff"
  }
});

const App = () => {

  const playSound = (sound) => {
    const soundObject = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log("Not able to play sound");
      }
    });
    setTimeout(() => soundObject.play(), 1000);

    soundObject.stop();
    soundObject.release();
  }

  return (
    <>
      <StatusBar backgroundColor="#101010" />
      <View style={styles.container}>
        <Text style={styles.title}>
          SPANISH SOUND
        </Text>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <ScrollView>
          <View style={styles.gridContainer}>
            {
              soundList.map((sound, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => { playSound(sound) }}
                  style={styles.box}
                >
                  <Text style={styles.text}>{index + 1}</Text>
                </TouchableOpacity>
              ))
            }
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default App
