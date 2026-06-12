import { View, Text, StyleSheet, Image } from "react-native";

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/imagem-perfil.jpg")}
        style={styles.image}
      />

      <Text style={styles.nome}>Luana</Text>
      <Text style={styles.cargo}>Desenvolvedor Mobile Jr</Text>

   
      <View style={styles.card}>
        <Text style={styles.sobreTitulo}>Sobre mim</Text>

        <Text style={styles.sobre}>
          Olá! Meu nome é Luana e sou estudante de desenvolvimento de sistemas.
          Estou aprendendo a criar aplicativos com React Native e Expo.
          Tenho interesse em interfaces modernas, consumo de APIs e criação de
          experiências intuitivas para o usuário. Busco evoluir como
          desenvolvedora Mobile Jr.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#EAF2FF", 
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginTop: 20,
    borderWidth: 3,
    borderColor: "#3B82F6",
  },

  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "'#79a7f1'",
  },

  cargo: {
    fontSize: 16,
    color: "#475569",
    marginBottom: 20,
  },

  card: {
     width: '50%',
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  sobreTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#79a7f1',
    marginBottom: 10,
  },

  sobre: {
    textAlign: "center",
    color: "#334155",
    fontSize: 14,
    lineHeight: 20,
  },
});