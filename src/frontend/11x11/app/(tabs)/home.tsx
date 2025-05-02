// app/(tabs)/index.tsx
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Platform,
  Image,
  // Importar tipos de estilo para melhor tipagem
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import { Link, useRouter } from "expo-router"; // Importar Link e useRouter

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Próximos jogos</Text>
      </View>
    </SafeAreaView>
  );
};

interface Styles {
  container: ViewStyle;
  content: ViewStyle;
  logo: ImageStyle;
  title: TextStyle; // Adicionado estilo para o título
  subtitle: TextStyle; // Adicionado estilo para o subtítulo
  inputContainer: ViewStyle;
  inputContainerSenha: ViewStyle;
  loginButton: ViewStyle;
  loginButtonText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: "#030326",
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    color: "#E1E1E1",
    textAlign: "left",
    marginLeft: 24,
    verticalAlign: "middle",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 400,
    color: "#E1E1E1",
    textAlign: "left",
    marginTop: 10,
    marginLeft: 24,
    verticalAlign: "middle",
  },
});

export default HomeScreen;
