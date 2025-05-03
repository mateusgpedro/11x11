// app/(tabs)/signup.tsx
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Platform,
  Image,
  ScrollView, // Import ScrollView for longer content
  // Importar tipos de estilo para melhor tipagem
  ViewStyle,
  TextStyle,
  ImageStyle,
  Alert, // Import Alert for simple feedback
} from "react-native";
import { useRouter } from "expo-router"; // Importar useRouter

// --- Assumindo que estes são os caminhos corretos ---
import FloatingLabelInput from "../../components/FloatingLabelInput";
import Button from "../../components/button";
import SignUpPrompt from "../../components/SignUp"; // Reutilizando o componente
import { auth0Domain, clientId, connection } from "@/auth-config";

// --- Definição de Tipos (Exemplo - Ajuste conforme seus componentes) ---
// Idealmente, você importaria estes tipos dos arquivos dos componentes.
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

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

interface SignUpPromptProps {
  promptText: string;
  actionText: string;
  onActionPress: () => void;
  style?: ViewStyle;
  promptStyle?: TextStyle;
  actionStyle?: TextStyle;
}

// --- Componente Principal ---

const SignUpScreen: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();

  const colors: { [key: string]: string } = {
    background: "rgba(3, 3, 38, 1)",
    text: "#FFFFFF",
    placeholder: "#A9A9A9",
    primary: "#4D4DFF",
    border: "#606080",
    error: "#FF6B6B", // Cor para erros de validação
  };

  const registerAccount = async (email: String, password: String, username: String) => {
    try {
      
    }
    catch (e) {
      console.log(e)
    }
  }

  const handleLoginPromptPress = () => {
    // Navega de volta para a tela de login (assumindo que está na raiz '/')
    router.replace("/");
  };

  const handleCreateAccountPress = () => {
    // --- Validação Simples ---
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }
    // Adicione mais validações se necessário (ex: formato de email, força da senha)
    

    // --- Lógica de Criação de Conta ---
    console.log(
      "Creating account with:",
      `Username: ${username}`,
      `Email: ${email}`,
      `Password: ${password}` // Não logar senhas em produção real!
    );
    // Aqui você chamaria sua API para criar a conta
    // Exemplo: createUser({ username, email, password });
    registerAccount(email, password, username);

    // Após sucesso (simulado aqui):
    Alert.alert("Sucesso", "Conta criada com sucesso!", [
      { text: "OK", onPress: () => router.replace("/") }, // Volta para login após OK
    ]);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* ScrollView permite rolar se o conteúdo exceder a tela (útil em telas menores) */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Image
            source={require("../../assets/images/11x11.png")} // Verifique o caminho
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>Crie Conta.</Text>
          <Text style={styles.subtitle}>Organiza. Jogue. Vença.</Text>

          {/* Input de Username */}
          <FloatingLabelInput
            label="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            style={styles.inputContainer}
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

          {/* Input de Email */}
          <FloatingLabelInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.inputContainer}
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

          {/* Input de Senha */}
          <FloatingLabelInput
            label="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            style={styles.inputContainer}
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

          {/* Input de Confirmar Senha */}
          <FloatingLabelInput
            label="Confirmar Senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            autoCapitalize="none"
            style={styles.inputContainerLast} // Menos margem inferior antes do prompt
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

          {/* Prompt para Login */}
          <SignUpPrompt
            promptText="Já tem uma conta?"
            actionText="Login"
            onActionPress={handleLoginPromptPress} // Navega para login
            style={styles.loginPromptContainer} // Estilo para espaçamento
          />

          {/* Botão de Criar Conta */}
          <Button
            title="Criar Conta"
            onPress={handleCreateAccountPress}
            style={styles.createAccountButton}
            textStyle={styles.createAccountButtonText}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Estilos Tipados ---
interface Styles {
  container: ViewStyle;
  scrollContent: ViewStyle; // Estilo para o contentContainer do ScrollView
  content: ViewStyle;
  logo: ImageStyle;
  title: TextStyle;
  subtitle: TextStyle;
  inputContainer: ViewStyle;
  inputContainerLast: ViewStyle; // Estilo para o último input
  loginPromptContainer: ViewStyle; // Estilo para o container do prompt de login
  createAccountButton: ViewStyle;
  createAccountButtonText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1, // Permite que o conteúdo cresça para preencher o espaço
    justifyContent: "center", // Centraliza o conteúdo verticalmente
  },
  content: {
    // justifyContent: 'center', // Removido daqui, controlado pelo scrollContent
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40, // Adiciona padding inferior para não colar no fim da tela
  },
  logo: {
    width: 80, // Um pouco menor para mais espaço vertical
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16, // Ligeiramente menor
    color: "#A9A9A9",
    textAlign: "center",
    marginBottom: 25,
  },
  inputContainer: {
    marginBottom: 18, // Espaçamento entre inputs
    width: "90%",
  },
  inputContainerLast: {
    marginBottom: 15, // Menos espaço antes do prompt
    width: "90%",
  },
  loginPromptContainer: {
    width: "90%", // Alinha com os inputs
    alignItems: "center", // Centraliza o prompt se ele for menor
    marginBottom: 20, // Espaço antes do botão
  },
  createAccountButton: {
    // marginTop é controlado pela margem inferior do prompt
    backgroundColor: "rgba(88, 95, 223, 1)",
    paddingVertical: 12,
    borderRadius: 5,
    width: "65%",
    alignItems: "center",
  },
  createAccountButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignUpScreen;
