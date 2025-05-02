// src/components/CardPartida.tsx
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importação correta

// --- Interface para definir as Props do Componente ---
interface CardPartidaProps {
  imagemBannerUrl: string;
  titulo: string;
  localizacao: string;
  horaInicio: string;
  horaTermino: string;
  descricao: string;
  style?: StyleProp<ViewStyle>;
}

// --- Componente Funcional CardPartida ---
const CardPartida: React.FC<CardPartidaProps> = ({
  imagemBannerUrl,
  titulo,
  localizacao,
  horaInicio,
  horaTermino,
  descricao,
  style,
}) => {
  return (
    <View style={[styles.cardContainer, style]}>
      {/* Imagem na Esquerda */}
      <Image
        source={{ uri: imagemBannerUrl }}
        style={styles.sideImage}
        resizeMode="cover"
      />

      {/* Conteúdo na Direita */}
      <View style={styles.contentContainer}>
        <Text style={styles.titulo}>{titulo}</Text>

        <View style={styles.infoContainer}>
          {/* Ícone e Texto de Localização */}
          <View style={styles.infoItem}>
            {/* CORRIGIDO AQUI: Ioicons -> Ionicons */}
            <Ionicons
              name="location-outline"
              size={16}
              color={styles.icon.color} // Usando a cor definida no estilo
              style={styles.icon}
            />
            <Text
              style={styles.infoText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {localizacao}
            </Text>
          </View>
          {/* Ícone e Texto de Horário */}
          <View style={styles.infoItem}>
            <Ionicons
              name="time-outline"
              size={16}
              color={styles.icon.color} // Usando a cor definida no estilo
              style={styles.icon}
            />
            <Text
              style={styles.infoText}
            >{`${horaInicio} - ${horaTermino}`}</Text>
          </View>
        </View>

        <Text style={styles.descricao} numberOfLines={3} ellipsizeMode="tail">
          {descricao}
        </Text>
      </View>
    </View>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(55, 53, 78, 1)",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    overflow: "hidden",
    minHeight: 120,
  },
  sideImage: {
    width: 110,
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    marginBottom: 6,
  },
  infoContainer: {
    marginBottom: 8,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  icon: {
    marginRight: 6,
    color: "#ccc", // Cor cinza claro para os ícones (ajustado para consistência)
  },
  infoText: {
    fontSize: 13,
    color: "#e0e0e0",
    flexShrink: 1,
  },
  descricao: {
    fontSize: 13,
    color: "#b0b0b0",
    lineHeight: 18,
  },
});

export default CardPartida;
