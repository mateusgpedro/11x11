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
    Switch
} from "react-native";

import FloatingLabelInput from "../../components/FloatingLabelInput";
import Button from "../../components/button";

const Finalizar: React.FC = () => {
    const [groupName, setGroupName] = useState<string>("");
    const [members, setMembers] = useState<string>("");
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Finalizar Jogo</Text>
            <Text style={styles.subtitle}>Preencha o seu contributo no jogo</Text>
            <View style={{ paddingHorizontal: 24 }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20,
                    marginLeft: 0, // Remova qualquer margem esquerda adicional
                    paddingLeft: 0
                }}>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={{
                        marginLeft: 10,
                        color: colors.text,
                        fontSize: 16
                    }}>
                        Ausente
                    </Text>
                </View>
                <FloatingLabelInput
                    label="Número de golos"
                    value={groupName}  // Use o estado aqui
                    onChangeText={setGroupName}  // Use a função de atualização do estado
                    keyboardType="default"
                    autoCapitalize="words"
                    secureTextEntry={false}
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
                <FloatingLabelInput
                    label="Assistências"
                    value={groupName}  // Use o estado aqui
                    onChangeText={setGroupName}  // Use a função de atualização do estado
                    keyboardType="default"
                    autoCapitalize="words"
                    secureTextEntry={false}
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
                <View style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20
                }}>
                    <Button
                        title="Guardar"
                        onPress={() => { }}
                        style={styles.loginButton}
                        textStyle={styles.loginButtonText}
                    />
                </View>
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

const colors: { [key: string]: string } = {
    background: "rgba(3, 3, 38, 1)",
    text: "#FFFFFF",
    placeholder: "#A9A9A9",
    primary: "#4D4DFF",
    border: "#606080",
};


const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        backgroundColor: "#030326",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
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
        marginBottom: 20,
        verticalAlign: "middle",
    },
    inputContainer: {
        marginBottom: 20,
        width: "100%",
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
});

export default Finalizar;