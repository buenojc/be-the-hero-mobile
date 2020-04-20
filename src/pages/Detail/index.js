import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import styles from "./styles";
import logoImg from "../../assets/logo.png";

export default function Incidents() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;

  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de R$ ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(incident.value)}`;

  function returnToIncidents() {
    navigation.goBack();
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [`${incident.email}`],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=+55${incident.whatsapp}text=${message}`
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={returnToIncidents}>
          <Feather name="arrow-left" color="#e02041" size={30} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={[1]}
        keyExtractor={(incident) => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.cardsContainer}>
            {/*Incident Card */}

            <View style={styles.card}>
              <View style={styles.incidentHeader}>
                <View style={styles.incidentOngName}>
                  <Text style={styles.incidentFieldTitle}>Caso:</Text>
                  <Text style={styles.incidentFieldValue}>
                    {incident.title}
                  </Text>
                </View>

                <View style={styles.incidentTitle}>
                  <Text style={styles.incidentFieldTitle}>ONG:</Text>
                  <Text style={styles.incidentFieldValue}>{incident.name}</Text>
                </View>
              </View>

              <Text style={styles.incidentFieldTitle}>Descrição:</Text>
              <Text style={styles.incidentFieldValue}>
                {incident.description}
              </Text>

              <Text style={styles.incidentFieldTitle}>Valor:</Text>
              <Text style={styles.incidentFieldValue}>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(incident.value)}
              </Text>
            </View>

            {/* End of Incident Card */}
            {/* Help Card */}

            <View style={styles.card}>
              <Text style={styles.helpTitle}>Salve o dia!</Text>
              <Text style={styles.helpTitle}>Seja o herói deste caso!</Text>
              <Text style={styles.helpDescription}>Entre em contato:</Text>

              <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={sendWhatsapp}>
                  <Text style={styles.btnText}>Whatsapp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={sendEmail}>
                  <Text style={styles.btnText}>E-mail</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* End of Help Card */}
          </View>
        )}
      />
    </View>
  );
}
