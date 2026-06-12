import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';

export default function ProjetosScreen() {

    function enviarContato() {
        Alert.alert('Contato enviado!', 'Em breve retorno para você.');
    }

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.titulo}>Projetos</Text>

            <View style={styles.card}>
                <Text style={styles.projeto}>App Contador</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Teste Técnico Dev Jr Mobile</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Aprendendo Routes</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Busca CEP</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>useEffect com API</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Atividade Chef de Cozinha</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Cards Funcionários</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Guia Turístico Digital</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Atividade Avaliativa</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>App Nav</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Código React</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Gerador de Crachá</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Swagger</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Meu App Nav</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Atividade Prática Back</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Carrinho de Compras</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Comanda Lanchonete</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Cards Pokémon</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>App Lista de Tarefas</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Meu Primeiro React</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Tela de Login</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Epic Dev</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Revisão POO</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Perfil Dev</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Gerenciamento de Filmes</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Revisão Back</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Olá Mundo</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Revisão HTML</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Site de Profissão</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.projeto}>Sistema de Petshop</Text>
            </View>

            <Text style={styles.titulo}>Contato</Text>

            <TextInput
                style={styles.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#64748B"
            />

            <TextInput
                style={styles.input}
                placeholder="Mensagem"
                placeholderTextColor="#64748B"
                multiline
            />

            <TouchableOpacity style={styles.button} onPress={enviarContato}>
                <Text style={styles.buttonText}>Enviar contato</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#EAF2FF',
    },

    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#79a7f1',
    },

    card: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },

    projeto: {
        fontWeight: 'bold',
        color:'#79a7f1',
        fontSize: 16,
    },

    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#93C5FD',
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
    },

    button: {
        backgroundColor: '#79a7f1',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 5,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});