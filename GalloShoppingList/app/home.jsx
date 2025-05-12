import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
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

        <View style={{ flex: 1}}></View>

        <View style={styles.footer}>
          
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
  }
})