
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';         

type Props = StackScreenProps<RootStackParamList, 'AddTasks'>;

export default function AddTasks({ navigation }: Props) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  function handleSubmit() {
    if (!titulo.trim() || !descricao.trim()) {
      Alert.alert('Erro', 'Preencha título e descrição.');
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title: titulo,
      description: descricao,
    };

    navigation.navigate('Home', { newTask });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Tarefa</Text>

      <TextInput
        style={styles.input}
        placeholder="Título..."
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={[styles.input, { height: 120 }]}
        placeholder="Descrição..."
        multiline
        value={descricao}
        onChangeText={setDescricao}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#dc3545' }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

