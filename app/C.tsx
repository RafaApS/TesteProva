import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
 
interface Fato {
  id: string;
  text: string;
  source: string;
  source_url: string;
  language: string;
  permalink: string;
}
 
export default function C() {
  const nav = useNavigation<NavigationProp<any>>();

  const [fato, setFato] = useState<Fato | null>(null);
  const [carregar, setCarregar] = useState(false);
 
  async function fetchFato() {
    setCarregar(true);
    try {
      const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
      const data: Fato = await res.json();
      setFato(data);
    } catch (error) {
      console.error("Erro ao buscar o fato:", error);
    } finally {
      setCarregar(false);
    }
  }
 
  return (
<View style={styles.container}>
<Text style={styles.titulo}>Fato Aleatório</Text>
 
      {carregar ? (
<ActivityIndicator size="large" color="#f5bc27" style={{ marginVertical: 20 }} />
      ) : (
        fato && (
<View style={styles.card}>
<Text style={styles.fato}>{fato.text}</Text>
</View>
        )
      )}
 
      <TouchableOpacity style={styles.botao} onPress={fetchFato}>
<Text style={styles.textoBotao}>Buscar Fato</Text>
</TouchableOpacity>
 
      
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5D327",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  card: {
    backgroundColor: " rgba(255, 255, 255, 0.8)",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: "100%",
  },
  fato: {
    fontSize: 16,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#F5EC27",
    width: 150,
    height: 35,
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 10,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  textoBotao: {
    textAlign: "center",
    fontSize: 16,
  },
});