import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase',
    marginVertical: 30
  }
});

const App = () => {
  const [randomColor, setRandomColor] = useState("#101010");
  
  const changeColor = () => {
    const [R, G, B] = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    setRandomColor(`rgb(${R}, ${G}, ${B})`);
  }

  const resetColor = () => {
    setRandomColor('#101010')
  }

  return (
    <>
     <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, { backgroundColor: randomColor }]}>
        <TouchableOpacity onPress={changeColor}>
          <Text style={[styles.text, {backgroundColor: '#0275d8'}]}>Tap Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetColor}>
          <Text style={[styles.text, {backgroundColor: '#d9534f'}]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App
