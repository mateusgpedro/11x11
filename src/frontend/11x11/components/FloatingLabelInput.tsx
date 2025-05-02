import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  Text, // Text não é usado diretamente, mas Animated.Text é
  StyleSheet,
  Animated,
  Platform,
  // Importar tipos necessários
  ViewStyle,
  TextStyle,
  TextInputProps,
} from "react-native";

// Definir tipos literais para props específicas
type InputType = "text" | "email" | "password";
type InputSize = "sm" | "md" | "lg";

// Definir a interface para as props do componente
interface FloatingLabelInputProps
  extends Omit<
    TextInputProps,
    "style" | "value" | "onChangeText" | "secureTextEntry" | "keyboardType"
  > {
  label: string;
  type?: InputType;
  size?: InputSize;
  value: string; // Assumindo que value é sempre string. Se puder ser null/undefined, use string | null | undefined
  onChangeText: (text: string) => void;
  style?: ViewStyle; // Estilo para o container View principal
  inputStyle?: TextStyle; // Estilo para o TextInput
  labelStyle?: TextStyle; // Estilo base para a Animated.Text (cor, etc.)
}

const FloatingLabelInputExpo: React.FC<FloatingLabelInputProps> = ({
  label,
  type = "text",
  size = "md",
  value,
  onChangeText,
  style,
  inputStyle: customInputStyle, // Renomeado para evitar conflito no escopo
  labelStyle: customLabelStyle, // Renomeado para evitar conflito no escopo
  ...props // Restante das TextInputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  // Considerar value pode ser null/undefined se a prop for opcional ou puder ser resetada
  const hasValue = value != null && value.length > 0;
  const labelAnim = useRef(
    new Animated.Value(hasValue || isFocused ? 1 : 0)
  ).current;

  // Tipagem interna para o objeto sizes (opcional, mas bom para clareza)
  type SizeConfig = {
    paddingVertical: number;
    paddingHorizontal: number;
    fontSize: number;
    labelFontSize: number;
    floatingLabelFontSize: number;
    labelTopPadding: number;
    floatingLabelTopPadding: number;
    containerHeight: number;
  };

  const sizes: Record<InputSize, SizeConfig> = {
    // Usar Record para tipar o objeto
    sm: {
      paddingVertical: 8,
      paddingHorizontal: 10,
      fontSize: 14,
      labelFontSize: 14,
      floatingLabelFontSize: 11,
      labelTopPadding: 8,
      floatingLabelTopPadding: Platform.OS === "ios" ? -9 : -11,
      containerHeight: 36, // Ajustado para melhor acomodar padding/fonte
    },
    md: {
      paddingVertical: 12,
      paddingHorizontal: 12,
      fontSize: 16,
      labelFontSize: 16,
      floatingLabelFontSize: 12,
      labelTopPadding: 12,
      floatingLabelTopPadding: Platform.OS === "ios" ? -10 : -13,
      containerHeight: 44, // Ajustado
    },
    lg: {
      paddingVertical: 16,
      paddingHorizontal: 14,
      fontSize: 18,
      labelFontSize: 18,
      floatingLabelFontSize: 14,
      labelTopPadding: 16,
      floatingLabelTopPadding: Platform.OS === "ios" ? -12 : -15,
      containerHeight: 58, // Ajustado
    },
  };
  const currentSize = sizes[size]; // Acesso seguro devido à tipagem de 'size'

  useEffect(() => {
    Animated.timing(labelAnim, {
      toValue: isFocused || hasValue ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, hasValue, labelAnim]);

  // Tipar o estilo animado (parcialmente, pois Animated.Value complica a tipagem completa)
  const animatedLabelStyle: Animated.WithAnimatedObject<TextStyle> = {
    position: "absolute",
    left: currentSize.paddingHorizontal,
    top: labelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [
        currentSize.labelTopPadding,
        currentSize.floatingLabelTopPadding,
      ],
    }),
    fontSize: labelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [
        currentSize.labelFontSize,
        currentSize.floatingLabelFontSize,
      ],
    }),
    color: labelAnim.interpolate({
      inputRange: [0, 1],
      // Usar cores do customLabelStyle se disponíveis, ou fallback
      outputRange: [customLabelStyle?.color?.toString() || "#aaa", "#007AFF"],
    }),
    zIndex: labelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    backgroundColor: labelAnim.interpolate({
      inputRange: [0, 1],
      // Usar cores do customLabelStyle se disponíveis, ou fallback
      outputRange: [
        "transparent",
        customLabelStyle?.backgroundColor?.toString() || "#FFF",
      ],
    }),
    paddingHorizontal: labelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 4],
    }),
    // Incluir outros estilos de customLabelStyle que não são animados
    ...(customLabelStyle || {}),
  };

  // Tipar o array de estilos do TextInput
  const textInputStyle: (TextStyle | undefined | false | null)[] = [
    styles.input,
    {
      height: currentSize.containerHeight,
      fontSize: currentSize.fontSize,
      paddingHorizontal: currentSize.paddingHorizontal,
      paddingTop:
        currentSize.paddingVertical + currentSize.floatingLabelFontSize / 2,
      paddingBottom:
        currentSize.paddingVertical - currentSize.floatingLabelFontSize / 2,
    },
    customInputStyle, // Estilo customizado do TextInput
  ];

  return (
    <View style={[styles.container, style]}>
      <Animated.Text
        style={[styles.label, animatedLabelStyle]} // Aplicar estilos base e animados
        // pointerEvents="none" // Adicionar se a label estiver bloqueando toques no input
      >
        {label}
      </Animated.Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={type === "password"}
        keyboardType={type === "email" ? "email-address" : "default"}
        style={textInputStyle}
        {...props} // Passar props restantes tipadas
      />
    </View>
  );
};

// Base StyleSheet (sem alterações na tipagem aqui, StyleSheet.create faz isso)
const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative", // Adicionado para contexto de posicionamento absoluto da label
    backgroundColor: "transparent",
  },
  label: {
    pointerEvents: "none",
    // Estilos base da label que não são animados
    // pointerEvents: "none", // Adicionar se necessário
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    // Estilos padrão que podem ser sobrescritos por customInputStyle
    color: "#000",
    backgroundColor: "#FFF",
  },
});

export default FloatingLabelInputExpo;
