
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CadastroScreen from "./src/screens/CadastroScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import LoginScreen from "./src/screens/LoginScreen";
import TransacaoScreen from "./src/screens/TransacaoScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2563EB",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{
            title: "Criar Conta",
          }}
        />

        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "Dashboard",
          }}
        />

        <Stack.Screen
          name="Transacoes"
          component={TransacaoScreen}
          options={{
            title: "Transações",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
