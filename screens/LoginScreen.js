import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard } from 'react-native';

const LoginScreen = ({navigation}) => {
 
const [email, setemail] = useState('');
const [password, setpessword] = useState('');

    return(
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.inner}>

              <TextInput style={styles.input} onChangeText={text => setemail(text)} value={email} placeholder='이메일을 입력해 주세요' />
              <TextInput style={styles.input} onChangeText={text => setpessword(text)} value={password} placeholder='학번을 입력해 주세요' />

            <View style={styles.btnContainer}>
                <Button title="로그인" />
                <Button title="회원가입" onPress={()=>navigation.navigate("Register")} />
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
  
export default LoginScreen
