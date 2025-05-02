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

// --- Assumindo que estes são os caminhos corretos ---
// É crucial que as props usadas abaixo correspondam às definidas nestes componentes.
import FloatingLabelInput from "../../components/FloatingLabelInput";
import Button from "../../components/button";
import SignUpPrompt from "../../components/SignUp";
import LoginText from "../../components/loginText";

// --- Definição de Tipos (Exemplo - Ajuste conforme seus componentes) ---
// Idealmente, você importaria estes tipos dos arquivos dos componentes.
// Se não os exportou, defina-os aqui ou inline.

// Exemplo para FloatingLabelInput (ajuste conforme a definição real)
interface FloatingLabelInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  secureTextEntry?: boolean;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
}

// Exemplo para Button (ajuste conforme a definição real)
interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

// Exemplo para SignUpPrompt (ajuste conforme a definição real)
interface SignUpPromptProps {
  promptText: string;
  actionText: string;
  onActionPress: () => void;
  style?: ViewStyle; // Adicionado caso você queira estilizar o container
  promptStyle?: TextStyle; // Estilo para o texto do prompt
  actionStyle?: TextStyle; // Estilo para o texto da ação
}

// Exemplo para LoginText (ajuste conforme a definição real - pode não ter props)
// interface LoginTextProps { }

// --- Componente Principal ---

const HomeScreen: React.FC = () => {
  // Definir como Functional Component
  const [email, setEmail] = useState<string>(""); // Tipagem explícita (opcional aqui, inferido)
  const [password, setPassword] = useState<string>(""); // Tipagem explícita (opcional aqui, inferido)
  const router = useRouter(); // Hook para navegação

  // Define colors for the dark theme
  // Tipar o objeto de cores para melhor autocompletar
  const colors: { [key: string]: string } = {
    background: "rgba(3, 3, 38, 1)",
    text: "#FFFFFF",
    placeholder: "#A9A9A9",
    primary: "#4D4DFF",
    border: "#606080",
  };

  const handleSignUpPress = () => {
    router.push("/signup"); // Navega para a rota /signup
  };

  const handleLoginPress = () => {
    // Lógica de login aqui
    console.log("Login pressed with Email:", email, "Password:", password);
    //router.replace("/home"); // Navega para home após login bem-sucedido
  };

  return (
    // Usar o tipo SafeAreaViewStyle se precisar tipar o style array
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/11x11.png")} // Verifique o caminho
          style={styles.logo}
          resizeMode="contain"
        />
        {/* Renderiza o componente LoginText */}
        {/* <LoginText /> */}
        {/* Se LoginText precisar de props, passe-as aqui */}
        {/* Exemplo: <LoginText title="Bem-vindo!" /> */}
        {/* Removido temporariamente se não tiver props ou conteúdo visível */}
        <Text style={styles.title}>Bem Vindo!</Text>{" "}
        <Text style={styles.subtitle}>Organiza. Jogue. Vença.</Text>
        {/* Adicionado um título simples */}
        {/* Input de Email */}
        <FloatingLabelInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.inputContainer}
          // Passando estilos inline (tipagem inferida, mas poderia ser mais explícita)
          inputStyle={{
            backgroundColor: "transparent",
            color: colors.text,
            borderColor: colors.border,
            // Platform.select é tipado automaticamente
            paddingTop: Platform.select({ ios: 18, default: 20 }),
          }}
          labelStyle={{
            color: colors.placeholder,
            backgroundColor: colors.background, // Para cobrir a borda ao flutuar
          }}
        />
        {/* Input de Senha */}
        <FloatingLabelInput
          label="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry // Booleano, não precisa de valor explícito
          autoCapitalize="none"
          style={styles.inputContainerSenha}
          inputStyle={{
            backgroundColor: "transparent",
            color: colors.text,
            borderColor: colors.border,
            paddingTop: Platform.select({ ios: 18, default: 20 }),
          }}
          labelStyle={{
            color: colors.placeholder,
            backgroundColor: colors.background,
          }}
        />
        {/* Prompt para SignUp */}
        <SignUpPrompt
          promptText="Ainda não tens conta?"
          actionText="Sign up"
          onActionPress={handleSignUpPress} // Usar a função de navegação
          // Adicione estilos se o componente SignUpPrompt os aceitar
          // style={styles.signUpContainer}
          // promptStyle={styles.signUpPromptText}
          // actionStyle={styles.signUpActionText}
        />
        {/* Botão de Login */}
        <Button
          title="Login"
          onPress={handleLoginPress}
          style={styles.loginButton}
          textStyle={styles.loginButtonText}
        />
        {/* Link alternativo (se SignUpPrompt não for usado ou como redundância) */}
        {/* <Link href="/signup" style={styles.signupLink}>
          <Text style={styles.signupLinkText}>Não tem uma conta? Cadastre-se</Text>
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

// --- Estilos Tipados ---
// Definir uma interface para os estilos ajuda na manutenção
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
  // Estilos opcionais para SignUpPrompt (se aplicável)
  // signUpContainer: ViewStyle;
  // signUpPromptText: TextStyle;
  // signUpActionText: TextStyle;
  // Estilos opcionais para Link alternativo
  // signupLink: ViewStyle;
  // signupLinkText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  // Usar a interface aqui
  container: {
    flex: 1,
    // backgroundColor é aplicado inline
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30, // Ajustado margin
  },
  title: {
    // Estilo para o título adicionado
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#A9A9A9",
    textAlign: "center",
    marginBottom: 30, // Adiciona espaço abaixo do subtítulo
  },

  inputContainer: {
    marginBottom: 20,
    width: "90%",
  },
  inputContainerSenha: {
    marginBottom: 15, // Reduzido margin para aproximar do SignUpPrompt
    width: "90%",
  },
  loginButton: {
    marginTop: 25, // Aumentado margin para separar do SignUpPrompt
    backgroundColor: "rgba(88, 95, 223, 1)",
    paddingVertical: 12,
    borderRadius: 5,
    width: "65%",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  // --- Estilos Opcionais (Descomente e ajuste se usar) ---
  /*
  signUpContainer: {
    flexDirection: 'row', // Para alinhar texto e ação lado a lado
    marginTop: 5, // Espaço acima do prompt
    marginBottom: 15, // Espaço abaixo do prompt
  },
  signUpPromptText: {
    color: '#A9A9A9', // Cor cinza para o prompt
    fontSize: 14,
    marginRight: 5, // Espaço entre prompt e ação
  },
  signUpActionText: {
    color: '#4D4DFF', // Cor azul para a ação
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  signupLink: {
    marginTop: 20,
  },
  signupLinkText: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  */
});

export default HomeScreen;
