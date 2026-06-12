import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PerfilScreen from './screens/PerfilScreen';
import HabilidadesScreen from './screens/HabilidadesScreen';
import ProjetosScreen from './screens/ProjetosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#79a7f1', 
                    },
                    headerTintColor: '#fff',

                    tabBarActiveTintColor: '#79a7f1',

                    tabBarStyle: {
                        backgroundColor: '#FFFFFF',
                        borderTopColor: '#E5E7EB',
                    },
                }}
            >
                <Tab.Screen name="Perfil" component={PerfilScreen} />
                <Tab.Screen name="Habilidades" component={HabilidadesScreen} />
                <Tab.Screen name="Projetos" component={ProjetosScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}