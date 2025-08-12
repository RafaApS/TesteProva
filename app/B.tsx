import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "#F5EC27",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text style={styles.t}>Nome:</Text>
        <Text style={styles.voltar}>Rafaela Ap O Santos</Text>
        <Text style={styles.t}>Email:</Text>
        <Text style={styles.voltar}>rafaela.santos70@fatec.sp.gov.br</Text>

    

    </View>

  );
}

const styles = StyleSheet.create({

    Img: {
        width:50,
        height:50
    },
    voltar: {
        color: "#000",
        fontSize: 20,
    },
    t:{
      fontWeight: "bold",
      color: "#000",
        fontSize: 20,
    }
})
