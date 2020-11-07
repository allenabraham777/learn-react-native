import React, { useState } from 'react';
import {
  Text,
  View,
  Touchable,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#101010'
  },
  text: {
    fontSize: 20,
    color: "#f0ad4e",
    paddingHorizontal: 45,
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: "#f0ad4e",
    borderRadius: 10,
    marginVertical: 30,
    fontWeight: 'bold'
  },
  image: {
    width: 200,
    height: 200
  }
});

const App = () => {
  const [uri, setUri] = useState(DiceFive);

  const rollDie = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setUri(DiceOne)
        break;
      case 2:
        setUri(DiceTwo)
        break;
      case 3:
        setUri(DiceThree)
        break;
      case 4:
        setUri(DiceFour)
        break;
      case 5:
        setUri(DiceFive)
        break;
      case 6:
        setUri(DiceSix)
        break;
      default:
        setUri(DiceOne)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Image source={uri} style={styles.image} />
        <TouchableOpacity onPress={rollDie}>
          <Text style={styles.text}>
            Play Game
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App;
