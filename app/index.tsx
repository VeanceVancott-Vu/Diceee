import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ImageSourcePropType } from 'react-native';
import { StatusBar } from 'expo-status-bar';

type DiceFace = 1 | 2 | 3 | 4 | 5 | 6;

const diceImages: Record<DiceFace, ImageSourcePropType> = {
  1: require('../assets/dice/dice_1.png'),
  2: require('../assets/dice/dice_2.png'),
  3: require('../assets/dice/dice_3.png'),
  4: require('../assets/dice/dice_4.png'),
  5: require('../assets/dice/dice_5.png'),
  6: require('../assets/dice/dice_6.png'),
};

const roll = (): DiceFace => (Math.floor(Math.random() * 6) + 1) as DiceFace;

export default function App() {
  const [leftDice, setLeftDice] = useState<DiceFace>(1);
  const [rightDice, setRightDice] = useState<DiceFace>(1);

  const rollDice = () => {
    setLeftDice(roll());
    setRightDice(roll());
  };

  return (
    <TouchableOpacity style={styles.container} onPress={rollDice} activeOpacity={0.9}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Dice Roller</Text>

      <View style={styles.diceContainer}>
        <Image source={diceImages[leftDice]} style={styles.dice} />
        <Image source={diceImages[rightDice]} style={styles.dice} />
      </View>

      <Text style={styles.instruction}>Tap anywhere to roll!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f7fa' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 180, color: '#004d40' },
  diceContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  dice: { width: 120, height: 120, marginHorizontal: 10 },
  instruction: { marginTop: 180, fontSize: 16, color: '#006064' },
});