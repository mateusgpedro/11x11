import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image, View } from "react-native";

// Cores
const ACTIVE_COLOR = "#585FDF";
const INACTIVE_COLOR = "white";
const BACKGROUND_COLOR = "#030326"; // Cor de fundo GERAL desejada
const TAB_BAR_BACKGROUND_COLOR = "rgba(55, 53, 78, 1)"; // Cor específica da Tab Bar

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,

        // --- Opções do Cabeçalho (Header) ---
        headerStyle: {
          backgroundColor: BACKGROUND_COLOR, // Fundo do Cabeçalho
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: () => (
          // Conteúdo do Título (Logo)
          <View style={{ paddingLeft: 24 }}>
            <Image
              source={require("../../assets/images/11x11.png")}
              style={{ width: 26, height: 26 }}
              resizeMode="contain"
            />
          </View>
        ),
        headerRight: () => (
          // Conteúdo à Direita (Notificações)
          <View style={{ paddingRight: 24 }}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </View>
        ),
        // Ajustes de espaçamento do header (mantidos)
        headerTitleContainerStyle: {
          marginHorizontal: 0,
          paddingHorizontal: 0,
          left: 0,
        },
        headerLeftContainerStyle: { paddingLeft: 0, marginLeft: 0 },
        headerRightContainerStyle: { paddingRight: 0, marginRight: 0 },

        // --- Opções da Barra de Abas (Tab Bar) ---
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: TAB_BAR_BACKGROUND_COLOR, // Fundo da Tab Bar
          borderTopWidth: 0, // Remove linha superior da tab bar (opcional)
        },
        // Ícone padrão (será sobrescrito por cada tela, exceto home)
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? "home" : "home-outline"}
            size={size}
            color={color}
          />
        ),

        // --- Estilo da Área de Conteúdo da Tela ---
        sceneContainerStyle: {
          backgroundColor: BACKGROUND_COLOR, // Aplica o fundo geral à área de conteúdo
        },
      }}
    >
      {/* Aba Home */}
      <Tabs.Screen
        name="home"
      // Não precisa de options aqui se o ícone padrão for o de home
      />
      {/* Aba Jogos */}
      <Tabs.Screen
        name="jogos"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "football" : "football-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      {/* Aba Grupos */}
      <Tabs.Screen
        name="grupos"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      {/* Aba Perfil */}
      <Tabs.Screen
        name="perfil"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="finalizar"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="criar"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
