// Exemplo na sua tela 'jogos.tsx' ou onde o botão estiver
import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native"; // Ou seu botão customizado
import CriarPartidaDialog from "../../components/CriarPartidaDialog"; // Ajuste o caminho

const CriarjogosScreen = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);

  const handleOpenDialog = () => {
    setDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setDialogVisible(false);
  };

  const handleCreatePartida = (data) => {
    console.log("Dados da nova partida:", data);
    // Aqui você faria a lógica para salvar os dados (API, estado global, etc.)
    // Por exemplo:
    // createMatchAPI(data)
    //   .then(() => {
    //     console.log('Partida criada com sucesso!');
    //     handleCloseDialog(); // Fecha o modal após sucesso
    //     // Atualizar a lista de partidas, etc.
    //   })
    //   .catch(error => {
    //     console.error('Erro ao criar partida:', error);
    //     // Mostrar mensagem de erro para o usuário
    //   });

    // Por enquanto, apenas fechamos o modal:
    handleCloseDialog();
  };

  return (
    <View style={styles.container}>
      {/* Seu conteúdo da tela aqui... */}

      {/* Botão para abrir o Dialog (use seu botão flutuante) */}
      <Button title="Criar Partida" onPress={handleOpenDialog} />
      {/* Ou use seu TouchableOpacity estilizado */}
      {/*
      <TouchableOpacity style={styles.seuBotaoFlutuante} onPress={handleOpenDialog}>
         <Text style={styles.seuTextoBotao}>Criar Partida</Text>
      </TouchableOpacity>
      */}

      <CriarPartidaDialog
        visible={isDialogVisible}
        onClose={handleCloseDialog}
        onSubmit={handleCreatePartida}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // ... seus outros estilos
    justifyContent: "center", // Exemplo
    alignItems: "center", // Exemplo
  },
  // Adicione os estilos do seu botão flutuante aqui se necessário
});

export default CriarjogosScreen;
