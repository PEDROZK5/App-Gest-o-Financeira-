
import React from "react";
import {
  ScrollView, StatusBar, StyleSheet, Text,
  TextInput,
  TouchableOpacity, View
} from "react-native";

export default function CadastroScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
        <View style={styles.circle3} />

        <Text style={styles.logo}>📝</Text>

        <Text style={styles.title}>
          Criar Conta
        </Text>

        <Text style={styles.subtitle}>
          Cadastre-se para começar a controlar suas finanças.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.welcome}>
          Cadastro
        </Text>

        <TextInput
          placeholder="Nome completo"
          style={styles.input}
          placeholderTextColor="#94A3B8"
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#94A3B8"
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#94A3B8"
        />

        <TextInput
          placeholder="Confirmar senha"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#94A3B8"
        />

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>
            Criar Conta
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginLink}>
            Já possui conta? Fazer login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D4ED8",
  },

  header: {
    height: 280,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingHorizontal: 30,
  },

  circle1: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "#60A5FA",
    top: -100,
    right: -50,
    opacity: 0.25,
  },

  circle2: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#93C5FD",
    left: -50,
    bottom: 20,
    opacity: 0.3,
  },

  circle3: {
    position: "absolute",
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#DBEAFE",
    top: 60,
    left: 30,
    opacity: 0.15,
  },

  logo: {
    fontSize: 85,
  },

  title: {
    color: "#FFF",
    fontSize: 38,
    fontWeight: "900",
    marginTop: 10,
  },

  subtitle: {
    color: "#E2E8F0",
    textAlign: "center",
    marginTop: 10,
    maxWidth: 320,
  },

  card: {
    flex: 1,

    backgroundColor: "#FFF",

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    padding: 30,

    shadowColor: "#001F5B",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,

    elevation: 15,
  },

  welcome: {
    fontSize: 34,
    fontWeight: "900",
    marginBottom: 25,
    color: "#0F172A",
  },

  input: {
    backgroundColor: "#F8FAFC",

    borderWidth: 1,
    borderColor: "#E2E8F0",

    borderRadius: 18,

    padding: 18,

    marginBottom: 15,
  },

  registerButton: {
    backgroundColor: "#2563EB",

    padding: 18,

    borderRadius: 18,

    alignItems: "center",

    marginTop: 10,
  },

  registerText: {
    color: "#FFF",
    fontWeight: "900",
    fontSize: 16,
  },

  loginLink: {
    textAlign: "center",
    color: "#2563EB",
    marginTop: 20,
    fontWeight: "700",
  },
});
