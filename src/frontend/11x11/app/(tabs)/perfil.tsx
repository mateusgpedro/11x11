import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ProfilePic from "../../components/ProfilePic"; // Ajuste o caminho

const SuaTela: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A minha conta</Text>
      <ProfilePic
        profileImageUrl={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/1/15/Suricato_perfil_Steam_2020.jpg",
        }}
        username="@beflex"
        rating={4.8}
        matchesPlayed={125}
        size={120} // Define o diâmetro da foto de perfil
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030326",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#E1E1E1",
    textAlign: "left",
    marginLeft: 16,
    marginBottom: 15,
  },
});

export default SuaTela;
