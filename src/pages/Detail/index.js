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
import { useNavigation } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import styles from "./styles";
import logoImg from "../../assets/logo.png";

export default function Incidents() {
  const navigation = useNavigation();
  const message =
    'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha Atropelada" com o valor de R$ 120,00';

  function returnToIncidents() {
    navigation.goBack();
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: "Herói do caso: Cadelinha Atropelada",
      recipients: ["jcbassumpcao@gmail.com"],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+5511985638193&text=${message}`);
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
                    Cadelinha atropelada
                  </Text>
                </View>

                <View style={styles.incidentTitle}>
                  <Text style={styles.incidentFieldTitle}>ONG:</Text>
                  <Text style={styles.incidentFieldValue}>APAD</Text>
                </View>
              </View>

              <Text style={styles.incidentFieldTitle}>Descrição:</Text>
              <Text style={styles.incidentFieldValue}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
                vestibulum quam. Maecenas fermentum sagittis leo, non vestibulum
                nunc consequat sed. Sed aliquam rutrum enim, id venenatis dui
                lacinia ut. Praesent suscipit sem non auctor aliquet. Praesent
                sit amet turpis commodo, tincidunt leo vel, suscipit libero.
                Mauris ornare velit quis ligula malesuada vulputate. Curabitur
                id urna est. Maecenas mollis consectetur purus vel vehicula.
              </Text>

              <Text style={styles.incidentFieldTitle}>Valor:</Text>
              <Text style={styles.incidentFieldValue}>R$ 120,00</Text>
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
