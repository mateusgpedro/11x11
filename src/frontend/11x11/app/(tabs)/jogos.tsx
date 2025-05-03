import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
// --- IMPORTAR useState ---
import React, { useState } from "react"; // Mudança: Importar useState
import CardPartida from "../../components/CardPartida"; // Ajuste o caminho
import { Ionicons } from "@expo/vector-icons";
// --- IMPORTAR O DIALOG ---
import CriarPartidaDialog from "../../components/CriarPartidaDialog"; // Ajuste o caminho se necessário

const jogos = () => {
  // Estado para o texto da busca
  const [searchText, setSearchText] = useState(""); // Mudança: Usar useState
  // --- ESTADO PARA CONTROLAR A VISIBILIDADE DO DIALOG ---
  const [isDialogVisible, setDialogVisible] = useState(false);

  // --- FUNÇÕES PARA CONTROLAR O DIALOG ---
  const handleOpenDialog = () => {
    console.log("Abrindo diálogo..."); // Log para debug
    setDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setDialogVisible(false);
  };

  const handleDialogSubmit = (data) => {
    console.log("Dados da Partida para Criar:", data);
    // Aqui você adicionaria a lógica para enviar os dados para sua API ou estado global
    // Exemplo: chamar uma função createMatch(data)
    handleCloseDialog(); // Fecha o dialog após a submissão
  };
  // --- FIM DAS FUNÇÕES DO DIALOG ---

  // A função handleCriarPartidaPress original foi substituída por handleOpenDialog

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Partidas</Text>

      {/* --- Barra de Busca --- */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#8E8E93"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar partidas..."
          placeholderTextColor="#8E8E93"
          value={searchText}
          onChangeText={setSearchText}
          underlineColorAndroid="transparent"
        />
      </View>
      {/* --- Fim da Barra de Busca --- */}

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
        {/* ... (outros cards) ... */}
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

      {/* Container do Botão Flutuante */}
      <View style={styles.fabContainer}>
        <TouchableOpacity
          style={styles.criarpartidaB}
          // --- MUDANÇA: Chamar handleOpenDialog ---
          onPress={handleOpenDialog}
          activeOpacity={0.8}
        >
          <Text style={styles.criarpartidaText}>Criar Partida</Text>
        </TouchableOpacity>
      </View>

      {/* --- RENDERIZAR O DIALOG --- */}
      <CriarPartidaDialog
        visible={isDialogVisible}
        onClose={handleCloseDialog}
        onSubmit={handleDialogSubmit}
      />
      {/* --- FIM DA RENDERIZAÇÃO DO DIALOG --- */}
    </View>
  );
};

// --- Estilos (permanecem os mesmos) ---
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "rgba(3, 3, 38, 1)",
    paddingTop: 20, // Adicionado paddingTop para não colar no topo
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#E1E1E1",
    textAlign: "left",
    marginLeft: 16,
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(55, 53, 78, 1)",
    borderRadius: 10,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    marginBottom: 20,
    height: 45,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#FFFFFF",
    height: "100%",
    backgroundColor: "rgba(55, 53, 78, 1)",
    // @ts-ignore - Para compatibilidade web/outros
    outlineStyle: "none",
  },
  scrollContentContainer: {
    paddingBottom: 20, // Garante espaço abaixo do último card
  },
  fabContainer: {
    position: "absolute",
    bottom: 0,
    left: 16,
    right: 16,
    paddingBottom: 15, // Espaço abaixo do botão
    // backgroundColor: 'rgba(3, 3, 38, 0.8)', // Fundo semi-transparente opcional
    // paddingTop: 10, // Espaço acima do botão opcional
  },
  criarpartidaB: {
    backgroundColor: "rgba(88, 95, 223, 1)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
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
});

export default jogos;
