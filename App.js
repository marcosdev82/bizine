import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import logo from '../bizine/src/assets/logo.png';
import bgImage from '../bizine/src/assets/background.jpg';


export default function App() {
  return (
    <View style={styles.container}>
        <ImageBackground  source={bgImage} style={styles.bgImage} />

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

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.textButton}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSignInFacebook}>
            <Text style={styles.textButton}>Entrar com Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCreateAccount}>
            <Text style={styles.textButtonLite}>Criar um conta</Text>
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
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  content: {
    width: '85%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    marginTop: 80,
    marginBottom: 70,
  },
  form: {
    width: '100%',
    backgroundColor:'#F9DB13E5',
    padding: 30,
    paddingTop: 40,
    paddingBottom: 60,
    borderRadius: 8,
    gap: 15,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 26,
    marginBottom: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontWeight: '600'
  },
  buttonSignIn: {
    backgroundColor: '#2B2B2B',
    padding: 15,
    height: 55,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonSignInFacebook: {
    backgroundColor: '#385593',
    padding: 15,
    height: 55,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonCreateAccount: {
    backgroundColor: '#E5E9F0',
    padding: 15,
    height: 55,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  textButton: {
    color: '#fff',
  },
  textButtonLite: {
    color: '#2B2B2B',
  },
  forgotPassword: {
    margin: 10,
    marginBottom: 5,
  }

});
