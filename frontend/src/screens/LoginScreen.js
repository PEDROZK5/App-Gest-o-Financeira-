
import React from "react";
import {
  StatusBar, StyleSheet, Text,
  TextInput,
  TouchableOpacity, View
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
        <View style={styles.circle3} />

        <Text style={styles.logo}>💰</Text>

        <Text style={styles.title}>
          Gestão Financeira
        </Text>

        <Text style={styles.subtitle}>
          Controle suas receitas, despesas, investimentos e metas em um único lugar.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.welcome}>
          Bem-vindo 👋
        </Text>

        <TextInput
          placeholder="Digite seu e-mail"
          placeholderTextColor="#94A3B8"
          style={styles.input}
        />

        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>
            Esqueceu sua senha?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={styles.loginText}>
            Entrar
          </Text>
        </TouchableOpacity>

        <View style={styles.separatorContainer}>
          <View style={styles.line} />
          <Text style={styles.separatorText}>ou</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.registerButtonText}>
            Criar nova conta
          </Text>
        </TouchableOpacity>

        <Text style={styles.version}>
          Gestão Financeira v1.0
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D4ED8",
  },

  header: {
    height: 320,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    position: "relative",
  },

  circle1: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "#60A5FA",
    top: -90,
    right: -70,
    opacity: 0.25,
  },

  circle2: {
    position: "absolute",
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: "#93C5FD",
    bottom: 20,
    left: -50,
    opacity: 0.3,
  },

  circle3: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#DBEAFE",
    top: 70,
    left: 40,
    opacity: 0.15,
  },

  logo: {
    fontSize: 90,
    marginBottom: 10,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "900",
    letterSpacing: -1,
    textAlign: "center",
  },

  subtitle: {
    color: "#E0EDFF",
    fontSize: 17,
    textAlign: "center",
    marginTop: 14,
    lineHeight: 26,
    fontWeight: "500",
    maxWidth: 360,
  },

  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    marginTop: -40,
    padding: 35,
  },

  welcome: {
    fontSize: 40,
    fontWeight: "900",
    color: "#0F172A",
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    fontSize: 16,
  },

  forgotPassword: {
    textAlign: "right",
    color: "#2563EB",
    fontWeight: "700",
    marginBottom: 20,
  },

  loginButton: {
    backgroundColor: "#2563EB",
    padding: 20,
    borderRadius: 18,
    alignItems: "center",
  },

  loginText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 17,
  },

  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#CBD5E1",
  },

  separatorText: {
    marginHorizontal: 15,
    color: "#64748B",
    fontWeight: "600",
  },

  registerButton: {
    borderWidth: 2,
    borderColor: "#2563EB",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  registerButtonText: {
    color: "#2563EB",
    fontSize: 15,
    fontWeight: "800",
  },

  version: {
    textAlign: "center",
    marginTop: 22,
    color: "#94A3B8",
    fontSize: 12,
  },
});

