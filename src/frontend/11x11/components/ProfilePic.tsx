// src/components/ProfilePic.tsx
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Certifique-se de ter @expo/vector-icons instalado

// --- Tipos para as Props ---
interface ProfilePicProps {
  /** URL ou source local da imagem de perfil do usuário */
  profileImageUrl: ImageSourcePropType;
  /** Nome de usuário a ser exibido */
  username: string;
  /** Avaliação numérica do usuário (ex: 4.5) */
  rating: number;
  /** Número de partidas jogadas pelo usuário */
  matchesPlayed: number;
  /** Tamanho (diâmetro) da imagem de perfil */
  size?: number;
}

const ProfilePic: React.FC<ProfilePicProps> = ({
  profileImageUrl,
  username,
  rating,
  matchesPlayed,
  size = 100, // Tamanho padrão de 100px (agora é o tamanho da foto)
}) => {
  const profilePicSize = size;
  const profilePicBorderRadius = 10; // Para fazer um círculo perfeito

  return (
    <View style={styles.container}>
      {/* Imagem de Perfil */}
      <Image
        source={profileImageUrl}
        style={[
          styles.profileImage,
          {
            width: profilePicSize,
            height: profilePicSize,
            borderRadius: profilePicBorderRadius, // Aplica o raio para formar um círculo
            marginBottom: 8, // Espaço entre a imagem e o nome
          },
        ]}
        resizeMode="cover"
      />

      {/* Nome de Usuário */}
      <Text style={styles.usernameText} numberOfLines={1} ellipsizeMode="tail">
        {username}
      </Text>

      {/* Avaliação e Partidas */}
      <View style={styles.ratingContainer}>
        <Ionicons
          name="star"
          size={16}
          color="#FFD700"
          style={styles.starIcon}
        />
        <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
        <Text style={styles.matchesText}>({matchesPlayed} partidas)</Text>
      </View>
    </View>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centraliza a imagem e os textos horizontalmente
    // A largura do container será definida pelo conteúdo (imagem + texto)
    // ou pode ser definida explicitamente onde o componente for usado, se necessário.
  },
  profileImage: {
    // O tamanho e borderRadius são definidos inline com base na prop 'size'
    backgroundColor: "#ccc", // Cor de fundo enquanto a imagem carrega
    // marginBottom foi movido para o estilo inline para ficar junto com width/height
  },
  // imageContainer e frameImage foram removidos
  usernameText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#E1E1E1",
    textAlign: "center",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Garante que a estrela e os textos fiquem centralizados
  },
  starIcon: {
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFD700",
    marginRight: 5,
  },
  matchesText: {
    fontSize: 13,
    color: "#A0A0A0",
  },
});

export default ProfilePic;
