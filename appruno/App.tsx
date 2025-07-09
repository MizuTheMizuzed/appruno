
import { StyleSheet,  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ScrollScreen from './screens/ScrollScreen';
import AddTasks from './screens/AddTasks';

export type RootStackParamList = {
  Home: { newTask?: { id: string; title: string; description: string } } | undefined;
  Details: { item: { id: string; title: string; description: string } };
  Profile: undefined;
  Scroll: undefined;
  AddTasks: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Tela Principal',
            headerStyle: { backgroundColor: '#007bff' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Detalhes',
            headerStyle: { backgroundColor: '#dc3545' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Meu Perfil',
            headerStyle: { backgroundColor: '#17a2b8' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Scroll"
          component={ScrollScreen}
          options={{
            title: 'ScrollView',
            headerStyle: { backgroundColor: '#28a745' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="AddTasks"
          component={AddTasks}
          options={{
            title: 'Adicionar Tarefa',
            headerStyle: { backgroundColor: '#007bff' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  cardSection: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
});
