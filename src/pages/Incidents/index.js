import React from "react";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate("Detail");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 Casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia
      </Text>

      <FlatList
        style={styles.incidentsList}
        data={[1, 2, 3, 4]}
        keyExtractor={(incidents) => String(incidents)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incidents}>
            <Text style={styles.incidentProperty}>Ong:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>Caso:</Text>
            <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

            <Text style={styles.incidentProperty}>Valor</Text>
            <Text style={styles.incidentValue}>R$ 120,00</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
