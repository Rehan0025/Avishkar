import React, { Component } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/firebase.config';
import {TextInput,Button } from 'react-native-paper';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Login = ({navigation}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const login=()=>{
      
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert("User login successfully");
          navigation.replace("Home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
    return (
      <View style={styles.mainContainer}>

      <Text style={styles.iconstyle}> 
      <Icon name="codesandbox" size={150} color="#560CCE" />
      </Text>
      <Text style={styles.textstyle}>Itemise</Text>
      <TextInput
        label="Username"
        value={email}
        mode='outlined'
        onChangeText={email => setEmail(email)}
        style={styles.txtInput}
      />
      <TextInput
        label="Password"
        value={password}
        mode='outlined'
        onChangeText={password=> setPassword(password)}
        
      />
      <TouchableOpacity >
      <Button mode="contained" style={styles.Button} onPress={() => login()}>
        Login
      </Button>
      </TouchableOpacity>
      </View>
           
    );
  };
  const styles = StyleSheet.create({
    mainContainer: {
      padding:50,
      justifyContent: 'center',
    },
    txtInput:{
      marginTop:80
    },
    Button:{
    marginTop:50,
    padding:5
    },
    textstyle:{
      alignSelf:"center",
      color:"#560CCE",
      fontStyle:"italic"
    },
    iconstyle:{
      alignSelf:"center",
      paddingTop:100,
    }
  });    
  
export default Login;