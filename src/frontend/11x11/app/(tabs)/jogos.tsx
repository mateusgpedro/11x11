import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import CardPartida from "../../components/CardPartida"; // Ajuste o caminho

const jogos = () => {
  const handleCriarPartidaPress = () => {
    console.log("Botão Criar Partida pressionado!");
    // Navegação ou lógica do modal aqui
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Partidas</Text>
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Seus Cards Partida aqui... */}
        <CardPartida
          imagemBannerUrl="https://c.pxhere.com/photos/a0/63/the_ball_stadion_football_the_pitch_grass_game_sport_match-1331809.jpg!d"
          titulo="Futebol de Terça - Galera Raiz"
          localizacao="Campo do Zé - Gramado Sintético"
          horaInicio="20:00"
          horaTermino="21:30"
          descricao="Partida semanal para aliviar o stress. Trazer R$15 para o aluguel da quadra e água."
        />
        <CardPartida
          imagemBannerUrl="https://c.pxhere.com/photos/a0/63/the_ball_stadion_football_the_pitch_grass_game_sport_match-1331809.jpg!d"
          titulo="Racha dos Veteranos"
          localizacao="Clube Recreativo - Campo Principal"
          horaInicio="09:00"
          horaTermino="10:30"
          descricao="Jogo para maiores de 40. Ritmo mais cadenciado. Churrasco opcional após o jogo."
        />
        <CardPartida
          imagemBannerUrl="https://c.pxhere.com/photos/a0/63/the_ball_stadion_football_the_pitch_grass_game_sport_match-1331809.jpg!d"
          titulo="Amistoso Empresa X"
          localizacao="Quadra Poliesportiva Central"
          horaInicio="18:00"
          horaTermino="19:00"
          descricao="Jogo de confraternização da firma."
        />
        <CardPartida
          imagemBannerUrl="https://c.pxhere.com/photos/a0/63/the_ball_stadion_football_the_pitch_grass_game_sport_match-1331809.jpg!d"
          titulo="Amistoso Empresa X"
          localizacao="Quadra Poliesportiva Central"
          horaInicio="18:00"
          horaTermino="19:00"
          descricao="Jogo de confraternização da firma."
        />
        <CardPartida
          imagemBannerUrl="https://c.pxhere.com/photos/a0/63/the_ball_stadion_football_the_pitch_grass_game_sport_match-1331809.jpg!d"
          titulo="Amistoso Empresa X"
          localizacao="Quadra Poliesportiva Central"
          horaInicio="18:00"
          horaTermino="19:00"
          descricao="Jogo de confraternização da firma."
        />
        <CardPartida
          imagemBannerUrl="https://c.pxhere.com/photos/a0/63/the_ball_stadion_football_the_pitch_grass_game_sport_match-1331809.jpg!d"
          titulo="Amistoso Empresa X"
          localizacao="Quadra Poliesportiva Central"
          horaInicio="18:00"
          horaTermino="19:00"
          descricao="Jogo de confraternização da firma."
        />

        {/* Espaço extra no final */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Container do Botão Flutuante - AJUSTADO */}
      <View style={styles.fabContainer}>
        <TouchableOpacity
          style={styles.criarpartidaB} // Estilo do botão - AJUSTADO
          onPress={handleCriarPartidaPress}
          activeOpacity={0.8}
        >
          <Text style={styles.criarpartidaText}>Criar Partida</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "rgba(3, 3, 38, 1)",
  },
  scrollContentContainer: {
    paddingTop: 50,
    paddingBottom: 20, // Ajuste conforme necessário para o espaço final
  },
  // Container para posicionar o botão flutuante - AJUSTADO
  fabContainer: {
    position: "absolute",
    bottom: 30,
    left: 16, // Mesma margem horizontal dos cards
    right: 16, // Mesma margem horizontal dos cards
    // alignItems: 'center', // Removido - o botão vai preencher
  },
  // Estilo para o botão - AJUSTADO
  criarpartidaB: {
    backgroundColor: "rgba(88, 95, 223, 1)",
    paddingVertical: 12,
    paddingHorizontal: 20, // Mantém o padding interno horizontal
    borderRadius: 5, // Mantendo o borderRadius que você tinha
    // width: "%", // Removido - o botão vai ocupar a largura do fabContainer
    alignItems: "center", // Mantém o texto centralizado dentro do botão
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  criarpartidaText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    color: "#E1E1E1",
    textAlign: "left",
    marginLeft: 24,
    verticalAlign: "middle",
  },
});

export default jogos;
