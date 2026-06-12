import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function HabilidadesScreen() {
    const habilidades = [
        'React Native',
        'JavaScript',
        'Git',
        'HTML',
        'CSS',
    ];

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}> Minhas Habilidades</Text>

            <FlatList
                data={habilidades}
                keyExtractor={(item) => item}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.item}>{item}</Text>
                    </View>
                )}
            />

        </View>
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
        marginBottom: 20,
        color: '#79a7f1',
        textAlign: 'center',
    },

    list: {
        paddingBottom: 20,
    },

    card: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },

    item: {
        fontSize: 16,
        color: '#79a7f1',
        fontWeight: '600',
        textAlign: 'center',
    },
});