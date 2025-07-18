
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskCard from '../components/TaskCard';

export default function HomeScreen({ navigation }:any) {
  const [localTasks, setLocalTasks] = useState([]);
  const [apiTasks, setApiTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => {
        setApiTasks(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        setError('Erro ao carregar tarefas da API');
        setIsLoading(false);
      });
  }, []);

  const addTask = ({ title, description }:any) => {
    setLocalTasks((prev):any => [
      ...prev,
      { id: Date.now().toString(), title, description: description || '', completed: false },
    ]);
  };

  const toggleTaskCompletion = (id:any) => {
    setLocalTasks((prev:any) =>
      prev.map((task:any) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const allTasks = [...apiTasks, ...localTasks];
[]
  const renderItem = ({ item }:any) => {
    const isLocal = typeof item.id === 'string';

      return (
        <View style={styles.container}>
          <Text style={styles.title}>Minhas Tarefas</Text>
          <Text style={styles.counterText}>
            Tarefas: {allTasks.length} | Concluídas: {allTasks.filter((task:any) => task.completed).length}
          </Text>
      
          {isLoading ? (
            <ActivityIndicator size="large" color="#007bff" />
          ) : error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : allTasks.length === 0 ? (
            <Text style={styles.emptyText}>Nenhuma tarefa adicionada</Text>
          ) : (
            <FlatList
              data={allTasks}
              renderItem={renderItem}
              keyExtractor={(item:any) => item.id.toString()}
              style={styles.list}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          )}
      
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('AddTask', { addTask })}
          >
            <Text style={styles.buttonText}>Adicionar Tarefa</Text>
          </TouchableOpacity>
        </View>
      );
    }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  counterText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#dc3545',
    textAlign: 'center',
    marginTop: 20,
  },
  list: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


