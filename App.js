import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import logo from '../bizine/src/assets/logo.png';


export default function App() {
  return (
    <View style={styles.container}>

        <StatusBar barStyle="dark-content" translucent={true} backgroundColor='#f1f1f1'/>

        <Image source={logo} style={styles.logo} />

        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.title}>Acesse sua conta</Text>
            <TextInput placeholderTextColor="#555" placeholder='Email' style={styles.input}/>
            <TextInput placeholderTextColor="#555" placeholder='senha' style={styles.input}/>
          </View>

          <TouchableOpacity style={styles.buttonSignIn}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9db14',
    justifyContent: 'start',
    flexDirection: 'column',
    alignItems: 'center', 
  },
  content: {
    width: '90%',
  },
  logo: {
    marginTop: 100,
    marginBottom: 100,
  },
  form: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 30,
    paddingTop: 50,
    paddingBottom: 50,
    borderRadius: 8,
    gap: 15,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontWeight: '600'
  },
  buttonSignIn: {
    backgroundColor: '#18161a',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  textButton: {
    color: '#fff'
  }

});
