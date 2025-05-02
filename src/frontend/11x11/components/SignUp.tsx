import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";

interface SignUpPromptProps {
  promptText?: string; // Texto principal ("Ainda não tem conta?")
  actionText?: string; // Texto clicável ("Sign up")
  onActionPress: () => void; // Função quando o texto clicável for pressionado
  containerStyle?: ViewStyle; // Estilo personalizado para o container
  promptStyle?: TextStyle; // Estilo personalizado para o texto principal
  actionStyle?: TextStyle; // Estilo personalizado para o texto clicável
}

const SignUpPrompt: React.FC<SignUpPromptProps> = ({
  promptText = "Ainda não tem conta?",
  actionText = "Sign up",
  onActionPress,
  containerStyle,
  promptStyle,
  actionStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.promptText, promptStyle]}>{promptText}</Text>
      <TouchableOpacity onPress={onActionPress}>
        <Text style={[styles.actionText, actionStyle]}>{actionText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "left",
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: "100%",
  },
  promptText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  actionText: {
    color: "#585FDF",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});

export default SignUpPrompt;
