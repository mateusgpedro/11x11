import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface LoginTextProps {
  title?: string;
  subtitle?: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  showSubtitle?: boolean;
}

const LoginText: React.FC<LoginTextProps> = ({
  title = "Bem vindo",
  subtitle = "Organiza.Jogue.Vença.",
  containerStyle,
  titleStyle,
  subtitleStyle,
  showSubtitle = true,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {showSubtitle && (
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
    textAlign: "center",
    letterSpacing: 0.5,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  subtitle: {
    fontSize: 18,
    color: "#A9A9A9",
    textAlign: "center",
    letterSpacing: 0.5,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    lineHeight: 24,
  },
});

export default LoginText;
