import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard } from 'react-native';
import { auth } from '../firebase';
import {createUserWithEmailAndPassword} from "firebase/auth";


const RegisterScreen = () =>{
    
    const [email, setemail] = useState('');
    const [password, setpessword] = useState('');


    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user.email);
          })
          .catch((error) => {
            const errorMessage = error.message;
          })
        
    } 

    return(
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.inner}>

              <TextInput style={styles.input} onChangeText={setemail} value={email} placeholder='이메일을 입력해 주세요' />
              <TextInput style={styles.input} onChangeText={setpessword} value={password}  keyboardType="number-pad" placeholder='학번을 입력해 주세요' />
              
            <View style={styles.btnContainer}>
                <Button title="Submit" onPress={register} />
            </View>

        </View>

        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>
  
          
  
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around"
    },
    header: {
      fontSize: 36,
      marginBottom: 48
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 36
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop: 12
    }
  });
  
export default RegisterScreen
