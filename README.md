# 🎲 Dice Roller App (React Native / Expo)

[![Expo](https://img.shields.io/badge/Expo-SDK%2054-blue.svg)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React%20Native-0.81-61dafb.svg)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An interactive, cross-platform mobile & web application built with **React Native**, **Expo Router**, and **TypeScript**. 

**Dice Roller** allows users to simulate rolling two 6-sided dice with a single tap anywhere on the screen. It serves as a clean, practical demonstration of React state management (`useState`), event handling, dynamic asset mapping, and cross-platform UI rendering.

---

## 🌟 Features

- 🎲 **Dual Dice Rolling**: Roll two dice simultaneously, generating random face values from 1 to 6.
- 📱 **Cross-Platform Support**: Runs smoothly on **Android**, **iOS**, and **Web**.
- 👆 **Tap to Roll**: Tap anywhere on the viewport to trigger a new roll.
- 🖼️ **Dynamic Image Rendering**: Seamlessly updates dice face images according to state changes.
- ⚡ **Built with Expo Router**: Clean file-based routing architecture.

---

## 🚀 Learning Objectives

This project was developed to demonstrate core React Native & Expo concepts:
- **State Management**: Using React's `useState` hook to manage the values of both dice.
- **User Interaction**: Implementing `TouchableOpacity` for full-screen touch responsiveness.
- **Dynamic Asset Loading**: Mapping state values to local image assets (`require(...)`).
- **Styling with `StyleSheet`**: Flexbox layout, alignment, color styling, and responsive spacing.

---

## 🛠️ Tech Stack

| Technology | Description |
| :--- | :--- |
| **[React Native](https://reactnative.dev)** | Core mobile UI framework (v0.81) |
| **[Expo](https://expo.dev)** | App platform & dev toolchain (SDK 54) |
| **[Expo Router](https://docs.expo.dev/router/introduction/)** | File-based router for React Native (v6.0) |
| **[TypeScript](https://www.typescriptlang.org/)** | Static typing and interface definitions |
| **[React 19](https://react.dev)** | Component architecture and state primitives |

---

## 📁 Project Structure

```text
DiceRoller/
├── app/
│   └── index.tsx          # Main entry screen & dice rolling logic
├── assets/
│   ├── dice/              # Dice face images (dice_1.png to dice_6.png)
│   └── images/            # App icons and splash screens
├── app.json               # Expo configuration file
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** / **pnpm**
- **Expo Go** app on your iOS/Android device (for mobile testing) or an emulator.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VeanceVancott-Vu/Diceee.git
   cd Diceee
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

### Running the App

- **Web**: Run `npm run web` or press `w` in the terminal.
- **Android**: Run `npm run android` or press `a` (requires Android Studio / Emulator or Expo Go).
- **iOS**: Run `npm run ios` or press `i` (requires macOS & Xcode Simulator or Expo Go).

---

## 🕹️ How It Works

1. **State Initialization**:
   ```typescript
   const [leftDice, setLeftDice] = useState<DiceFace>(1);
   const [rightDice, setRightDice] = useState<DiceFace>(1);
   ```

2. **Roll Logic**:
   When the user taps the screen, `rollDice()` generates two random numbers between 1 and 6:
   ```typescript
   const roll = (): DiceFace => (Math.floor(Math.random() * 6) + 1) as DiceFace;

   const rollDice = () => {
     setLeftDice(roll());
     setRightDice(roll());
   };
   ```

3. **Rendering**:
   The image sources update dynamically based on the state mapping:
   ```typescript
   <Image source={diceImages[leftDice]} style={styles.dice} />
   <Image source={diceImages[rightDice]} style={styles.dice} />
   ```

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).