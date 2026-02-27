import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => { setContador(contador + 1); };
  const decrementar = () => { setContador(contador - 1); };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Contador</Text>
      
      <Text style={styles.numero}>{contador}</Text>

      <View style={styles.linhaDeBotoes}>
        <TouchableOpacity style={styles.botaoMenos} onPress={decrementar}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoMais} onPress={incrementar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  numero: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  linhaDeBotoes: {
    flexDirection: 'row',
    gap: 20, // Espaçamento entre os botões
  },
  botaoMais: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
    width: 80,
    alignItems: 'center',
  },
  botaoMenos: {
    backgroundColor: '#F44336',
    padding: 20,
    borderRadius: 10,
    width: 80,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  }
});