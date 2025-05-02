import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Ou sua biblioteca de ícones
import { Image } from "react-native";

// Cores podem vir de um tema
const ACTIVE_COLOR = "#585FDF";
const INACTIVE_COLOR = "white"; // Considere a acessibilidade se o fundo for claro também
const BACKGROUND_COLOR = "#030326"; // Cor de fundo da barra de navegação

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true, // Mantenha true se quiser o cabeçalho
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        headerStyle: {
          backgroundColor: BACKGROUND_COLOR,
          borderBottomWidth: 0, // Remove a borda inferior do cabeçalho
        },
        tabBarShowLabel: false, // <-- ADICIONE ESTA LINHA PARA ESCONDER OS LABELS
        tabBarStyle: {
          backgroundColor: BACKGROUND_COLOR,
          borderBottomWidth: 0, // Remove a borda superior da barra de tabs
        },
        // Você pode ajustar o estilo da barra aqui, se necessário
        // tabBarStyle: { backgroundColor: 'black' }, // Exemplo
      }}
    >
      {/* Aba Home (corresponde a home.tsx) */}
      <Tabs.Screen
        name="home" // Deve corresponder ao nome do arquivo (ex: home.tsx)
        options={{
          // O título do cabeçalho ainda pode ser definido se headerShown: true
          headerTitle: () => (
            <Image
              source={require("../../assets/images/11x11.png")} // Verifique o caminho
              style={{ width: 26, height: 26 }}
              resizeMode="contain"
            />
          ),
          // É importante definir um ícone, já que não haverá label
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"} // Use um ícone apropriado
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* Aba Grupos */}
      <Tabs.Screen
        name="grupos" // Corresponde a grupos.tsx
        options={{
          headerTitle: "Grupos", // Define o título apenas no cabeçalho
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              // Escolha ícones adequados para 'grupos'
              name={focused ? "people" : "people-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* Aba Jogos */}
      <Tabs.Screen
        name="jogos" // Corresponde a jogos.tsx
        options={{
          headerTitle: "Jogos", // Define o título apenas no cabeçalho
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              // Escolha ícones adequados para 'jogos'
              name={focused ? "game-controller" : "game-controller-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* Aba Perfil */}
      <Tabs.Screen
        name="perfil" // Corresponde a perfil.tsx
        options={{
          headerTitle: "Perfil", // Define o título apenas no cabeçalho
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}



