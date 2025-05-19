import React, { useState } from 'react'
import { Alert, FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const [textInput, setTextInput] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (textInput == '') {
      Alert.alert(
        'Ocorreu um problema :(',
        'Por favor, informe o nome do produto'
      );
    } else {
      const newItem = {
        id: Date.now().toString(),
        name: textInput,
        bought: false
      }
      setItems([...items, newItem]);
      setTextInput('');
    }
  } 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={{ flex: 1, justifyContent: 'flex-start' }}
        resizeMode='repeat'
      >
        <View style={styles.header}>
          <Text style={styles.title}>Lista de Produtos</Text>
          <Ionicons name="trash" size={32} color="#fff" />
        </View>

        <FlatList
          contentContainerStyle={{ padding: 20, paddingBottom: 100, color: '#fff' }}
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => 
            <Text style={{ color: '#fff', fontSize: 20 }}>
              {item.name}
            </Text>
          }
        />

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput 
              color="#fff"
              fontSize={18}
              placeholderTextColor="#aeaeae"
              placeholder='Digite o nome do produto...'
              value={textInput}
              onChangeText={(text) => setTextInput(text)}
            />
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={addItem}>
            <Ionicons name="add" size={36} color="#fff" />
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 25,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000c0',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff'
  },
  footer: {
    backgroundColor: '#000000c0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#000",
    height: 50,
    marginVertical: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
})