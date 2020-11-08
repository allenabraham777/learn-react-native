import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004
} // Just a sample value. Value may vary each time

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010"
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 50,
    fontWeight: "bold"
  },
  logo: {
    width: "100%",
    height: 300,
    marginTop: 20
  },
  resultContainer: {
    height: 70,
    justifyContent: "center",
    borderColor: "#BBE1FA",
    borderWidth: 2,
    alignItems: "center"
  },
  resultValue: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#BBE1FA",
  },
  input: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    width: "100%",
    textAlign: "center"
  },
  convertButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10
  },
  convertButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: "33.33%",
    borderWidth: 2,
    borderColor: "#BBE1FA",
    marginTop: 10,
    backgroundColor: "#0F4C75"
  },
  convertButtonText: {
    color: "#FFFFFF",
    fontSize: 15
  }
})

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = (currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: "#EA7773",
        textColor: "#101010",
      });
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency];
    setResultValue(result.toFixed(2));
  }

  return (
    <>
      <ScrollView
        backgroundColor="#101010"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic"
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>
            CURRENCY APP
          </Text>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>
              {resultValue}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor="#c1c1c1"
              onChangeText={(value) => { setInputValue(value) }}
              value={inputValue || ''}
            />
          </View>
          <View style={styles.convertButtonContainer}>
            {Object.keys(currencyPerRupee).map((currency) => (
              <TouchableOpacity
                key={currency}
                onPress={() => {buttonPressed(currency)}}
                style={styles.convertButton}
              >
                <Text style={styles.convertButtonText}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  )
}

export default App
