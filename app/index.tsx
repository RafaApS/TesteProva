import { Link } from "expo-router";
import { Image, StyleSheet, View } from "react-native";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5bc27"
      }}
    >
        <Image
          source={{ uri: "https://img.freepik.com/vetores-premium/rosto-de-emoji-sorridente-fofo-em-moderno-emoticon-sorridente-feliz_248162-139.jpg" }} // Imagem de avatar aleatória
          style={styles.Img}
        />

        <Link href="/B" style={styles.voltar}>
                      Ir para a página B
                  </Link>
                   <Link href="/C" style={styles.voltar}>
                      Ir para a página C
                  </Link>
    </View>
  );
}

const styles = StyleSheet.create({

    Img: {
        width:250,
        height:250,
    },
 voltar: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        color: "#000",
        fontSize: 20,
        marginTop: 10,
    }

})
