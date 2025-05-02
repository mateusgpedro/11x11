// components/BottomNavBar.tsx
// (O código que você forneceu está correto e permanece o mesmo)
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const ACTIVE_TINT_COLOR = "tomato"; // Exemplo: Cor ativa
const INACTIVE_TINT_COLOR = "gray"; // Exemplo: Cor inativa

const BottomNavBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
      <View style={styles.navBarContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            typeof options.tabBarLabel === "string"
              ? options.tabBarLabel
              : typeof options.title === "string"
                ? options.title
                : route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, { merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const color = isFocused ? ACTIVE_TINT_COLOR : INACTIVE_TINT_COLOR;
          const tabBarIcon = options.tabBarIcon; // Pega a função do ícone das opções

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButton}
            >
              {/* Renderiza o ícone usando a função passada */}
              {tabBarIcon &&
                tabBarIcon({ focused: isFocused, color: color, size: 24 })}
              <Text style={[styles.tabLabel, { color: color }]}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

// Estilos (mantidos do seu exemplo)
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    borderTopColor: "#e0e0e0",
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  navBarContainer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "white",
    alignItems: "center",
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 4,
  },
});

export default BottomNavBar;
