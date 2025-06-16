import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Card from './components/card';

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
});

function Card({ texto }) {
  return (
    <View style={styles.Card}>
      <Text style={styles.cardText}>{texto}</Text>
    </View>
  );
}

export default function App() {
  const handleCardPress = () => {
    Alert.alert('Card Clicado', 'Você tocou no card!');
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Minha Tela Estilizada</Text>
      </View>
    </View>
  );
  {/* Conteúdo Principal */ }
  <View style={styles.content}>
    <Image
      source={{ uri: 'https://reactnative.dev/img/logo-og.png' }}
      style={styles.image}
    />
    <Text style={styles.subtitle}>Explorando Estilos no React Native</Text>
  </View>

  {/* Seção de Cards */ }
  <View style={styles.cardSection}>
    <TouchableOpacity onPress={handleCardPress}>
      <Card texto="Card 1: Estilização com Flex" />
    </TouchableOpacity>
    <TouchableOpacity onPress={handleCardPress}>
      <Card texto="Card 2: Layouts Responsivos" />
    </TouchableOpacity>
  </View>;
}


