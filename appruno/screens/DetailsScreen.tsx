
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ navigation, route }:any) {
  const { item } = route.params || {};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    itemTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    itemDescription: {
      fontSize: 16,
      color: '#666',
      marginBottom: 20,
      textAlign: 'center',
    },
    message: {
      fontSize: 18,
      color: '#333',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#dc3545',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Item</Text>
      {item ? (
        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      ) : (
        <Text style={styles.message}>Nenhum item selecionado</Text>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

