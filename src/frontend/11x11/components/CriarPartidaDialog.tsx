// src/components/CriarPartidaDialog.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable, // Para fechar ao clicar fora
  ScrollView, // Para garantir que caiba em telas menores
  KeyboardAvoidingView, // Para evitar que o teclado cubra os inputs
  Platform,
} from "react-native";

// --- Tipos ---
interface PartidaData {
  nome: string;
  localizacao: string;
  data: string;
  horaInicio: string;
  horaTermino: string;
  descricao: string;
}

interface CriarPartidaDialogProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: PartidaData) => void;
}

// --- Componente ---
const CriarPartidaDialog: React.FC<CriarPartidaDialogProps> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  // Estados para cada campo do formulário
  const [nome, setNome] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [data, setData] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaTermino, setHoraTermino] = useState("");
  const [descricao, setDescricao] = useState("");

  // Limpa os campos quando o modal é fechado
  useEffect(() => {
    if (!visible) {
      setNome("");
      setLocalizacao("");
      setData("");
      setHoraInicio("");
      setHoraTermino("");
      setDescricao("");
    }
  }, [visible]);

  const handleSubmit = () => {
    const partidaData: PartidaData = {
      nome,
      localizacao,
      data,
      horaInicio,
      horaTermino,
      descricao,
    };
    // Adicionar validação aqui se necessário
    onSubmit(partidaData);
    // onClose(); // Fechar automaticamente após submeter
  };

  return (
    <Modal
      animationType="fade" // ou "slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose} // Para o botão voltar do Android
    >
      {/* KeyboardAvoidingView para ajustar a tela quando o teclado aparece */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingContainer}
      >
        {/* Overlay semi-transparente */}
        <Pressable style={styles.overlay} onPress={onClose}>
          {/* Container do Dialog (Impede que o clique feche o modal) */}
          <Pressable onPress={(e) => e.stopPropagation()}>
            <View style={styles.dialogContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Criar Nova Partida</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Nome da Partida"
                  placeholderTextColor="#8E8E93"
                  value={nome}
                  onChangeText={setNome}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Localização"
                  placeholderTextColor="#8E8E93"
                  value={localizacao}
                  onChangeText={setLocalizacao}
                />
                {/* Inputs para Data e Horas (Idealmente usar DatePicker/TimePicker) */}
                <View style={styles.row}>
                  <TextInput
                    style={[styles.input, styles.inputHalf]}
                    placeholder="Data (DD/MM/AAAA)"
                    placeholderTextColor="#8E8E93"
                    value={data}
                    onChangeText={setData}
                    // keyboardType="numeric" // Pode ajudar, mas validação é melhor
                  />
                  <TextInput
                    style={[styles.input, styles.inputHalf]}
                    placeholder="Hora Início (HH:MM)"
                    placeholderTextColor="#8E8E93"
                    value={horaInicio}
                    onChangeText={setHoraInicio}
                    // keyboardType="numeric"
                  />
                </View>
                <TextInput
                  style={[styles.input]} // Ocupa a linha inteira
                  placeholder="Hora Término (HH:MM)"
                  placeholderTextColor="#8E8E93"
                  value={horaTermino}
                  onChangeText={setHoraTermino}
                  // keyboardType="numeric"
                />
                <TextInput
                  style={[styles.input, styles.inputDescription]}
                  placeholder="Descrição"
                  placeholderTextColor="#8E8E93"
                  value={descricao}
                  onChangeText={setDescricao}
                  multiline={true}
                  numberOfLines={4}
                  textAlignVertical="top" // Para alinhar o texto no topo no Android
                />

                {/* Botões */}
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.cancelButton]}
                    onPress={onClose}
                    activeOpacity={0.7}
                  >
                    <Text style={[styles.buttonText, styles.cancelButtonText]}>
                      Cancelar
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.submitButton]}
                    onPress={handleSubmit}
                    activeOpacity={0.8}
                  >
                    <Text style={[styles.buttonText, styles.submitButtonText]}>
                      Criar Partida
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Fundo escuro semi-transparente
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15, // Evita que o dialog cole nas bordas
  },
  dialogContainer: {
    width: "100%", // Ocupa a largura disponível (limitada pelo padding do overlay)
    maxWidth: 500, // Largura máxima para tablets, por exemplo
    backgroundColor: "#2A2A4E", // Cor de fundo do dialog (ajuste conforme a imagem)
    borderRadius: 15,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 25,
  },
  input: {
    backgroundColor: "#37354E", // Cor de fundo do input (ajuste)
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 15,
    borderWidth: 1, // Adiciona uma borda sutil se desejar
    borderColor: "#4A4860", // Cor da borda sutil
  },
  inputDescription: {
    height: 100, // Altura maior para descrição
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputHalf: {
    width: "48%", // Para dividir a linha em dois inputs
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Ou 'flex-end' se quiser botões à direita
    marginTop: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1, // Faz os botões tentarem ocupar espaço igual
    marginHorizontal: 5, // Espaço entre os botões
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "transparent", // Ou uma cor sutil como '#4A4860'
    borderWidth: 1,
    borderColor: "#888", // Cor da borda do botão cancelar
  },
  submitButton: {
    backgroundColor: "#585FDF", // Cor principal de ação (ajuste)
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButtonText: {
    color: "#AAA", // Cor do texto cancelar
  },
  submitButtonText: {
    color: "#FFFFFF", // Cor do texto criar
  },
});

export default CriarPartidaDialog;
