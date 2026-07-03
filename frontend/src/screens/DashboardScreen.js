
import React from "react";
import {
    Dimensions, ScrollView, StyleSheet, Text, View
} from "react-native";
import { PieChart } from "react-native-chart-kit";


const screenWidth = Dimensions.get("window").width;

export default function DashboardScreen() {
  const pieData = [
    {
      name: "Receitas",
      population: 20000,
      color: "#16A34A",
      legendFontColor: "#334155",
      legendFontSize: 14,
    },
    {
      name: "Despesas",
      population: 4570,
      color: "#DC2626",
      legendFontColor: "#334155",
      legendFontSize: 14,
    },
    {
      name: "Investimentos",
      population: 5000,
      color: "#2563EB",
      legendFontColor: "#334155",
      legendFontSize: 14,
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Dashboard Financeiro
        </Text>

        <Text style={styles.subtitle}>
          Visão geral das suas movimentações
        </Text>
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>
          Saldo Atual
        </Text>

        <Text style={styles.balanceValue}>
          R$ 15.430,00
        </Text>

        <Text style={styles.balanceGrowth}>
          ↑ 12,5% em relação ao mês passado
        </Text>
      </View>

      <View style={styles.row}>
        <View style={styles.smallCard}>
          <Text style={styles.cardLabel}>
            Receitas
          </Text>

          <Text style={styles.greenText}>
            R$ 20.000
          </Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.cardLabel}>
            Despesas
          </Text>

          <Text style={styles.redText}>
            R$ 4.570
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.smallCard}>
          <Text style={styles.cardLabel}>
            Investimentos
          </Text>

          <Text style={styles.blueText}>
            R$ 5.000
          </Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.cardLabel}>
            Economia
          </Text>

          <Text style={styles.purpleText}>
            78%
          </Text>
        </View>
      </View>

      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>
          📊 Resumo Financeiro
        </Text>

        <PieChart
          data={pieData}
          width={screenWidth - 100}
          height={220}
          chartConfig={{
            color: () => "#2563EB",
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="20"
          absolute
        />
      </View>

      <View style={styles.transactionsCard}>
        <Text style={styles.transactionsTitle}>
          Últimas movimentações
        </Text>

        <View style={styles.transactionItem}>
          <Text style={styles.transactionText}>
            💰 Salário
          </Text>

          <Text style={styles.greenText}>
            + R$ 5.000
          </Text>
        </View>

        <View style={styles.transactionItem}>
          <Text style={styles.transactionText}>
            🍔 Alimentação
          </Text>

          <Text style={styles.redText}>
            - R$ 120
          </Text>
        </View>

        <View style={styles.transactionItem}>
          <Text style={styles.transactionText}>
            🎮 Lazer
          </Text>

          <Text style={styles.redText}>
            - R$ 89
          </Text>
        </View>

        <View style={styles.transactionItem}>
          <Text style={styles.transactionText}>
            📈 Investimento
          </Text>

          <Text style={styles.blueText}>
            R$ 500
          </Text>
        </View>
      </View>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 10,
  },

  greeting: {
    fontSize: 34,
    fontWeight: "900",
    color: "#0F172A",
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 5,
  },

  balanceCard: {
    margin: 20,
    marginTop: 10,

    backgroundColor: "#2563EB",

    borderRadius: 30,

    padding: 30,

    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 20,

    elevation: 15,
  },

  balanceLabel: {
    color: "#DBEAFE",
    fontSize: 15,
  },

  balanceValue: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "900",
    marginTop: 10,
  },

  balanceGrowth: {
    color: "#BFDBFE",
    marginTop: 10,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    marginHorizontal: 20,
    gap: 15,
    marginBottom: 15,
  },

  smallCard: {
    flex: 1,

    backgroundColor: "#FFFFFF",

    borderRadius: 25,

    padding: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 8,
  },

  cardLabel: {
    color: "#64748B",
    marginBottom: 12,
  },

  greenText: {
    color: "#16A34A",
    fontWeight: "900",
    fontSize: 24,
  },

  redText: {
    color: "#DC2626",
    fontWeight: "900",
    fontSize: 24,
  },

  blueText: {
    color: "#2563EB",
    fontWeight: "900",
    fontSize: 24,
  },

  purpleText: {
    color: "#7C3AED",
    fontWeight: "900",
    fontSize: 24,
  },

  chartCard: {
    backgroundColor: "#FFFFFF",

    margin: 20,

    borderRadius: 30,

    padding: 25,

    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 8,
  },

  chartTitle: {
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 15,
    color: "#0F172A",
  },

  transactionsCard: {
    backgroundColor: "#FFFFFF",

    marginHorizontal: 20,

    borderRadius: 30,

    padding: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 8,
  },

  transactionsTitle: {
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 20,
    color: "#0F172A",
  },

  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  transactionText: {
    fontSize: 15,
    color: "#334155",
  },
});
