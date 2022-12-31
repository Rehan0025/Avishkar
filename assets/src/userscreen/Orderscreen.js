import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StatusBar,
    } from 'react-native';
   import React, {useState} from 'react';
    
    export default function Order() {
      // const [email, setEmail] = useState('');
      // const [password, setPassword] = useState('');
      return (
        <View style={styles.mainContainer}>
          <StatusBar style="auto" />
          <Text style={styles.textContainer}> ORDER</Text>
    
          <View style={styles.loginContainer} />
    
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="ORDER ID."
              placeholderTextColor="#003f5c"
              autoCapitalize="none"
              autoCorrect={false}
              />
            </View>
             <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="PRODUCT NAME."
              placeholderTextColor="#003f5c"
              autoCapitalize="none"
              autoCorrect={false}
              />
            </View>
             <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="QUANTITY."
              placeholderTextColor="#003f5c"
              autoCapitalize="none"
              autoCorrect={false}
              />
            </View>
  
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="COMPANY NAME."
              placeholderTextColor="#003f5c"
              autoCapitalize="none"
              autoCorrect={false}
              
              
            />
            </View>
  
            
  
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="TIME."
              placeholderTextColor="#003f5c"
              
              autoCapitalize="none"
              autoCorrect={false}
              
              
            />
          </View>
  
          
    
          {/* <TouchableOpacity>
            <Text style={styles.forgot_button}></Text>
          </TouchableOpacity> */}
    
          {/* //! Login Button */}
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>ORDER</Text>
          </TouchableOpacity>
    
          {/* <Text> {email} </Text>
          <Text> {password} </Text> */}
        </View>
      );
    }
    const styles = StyleSheet.create({
      mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      textContainer: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        position: 'relative',
        top:-20,
      },
    
      loginContainer: {
        flex: 0.3,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 10,
        height: 100,
        width: 300,
      },
    
      inputView: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        borderRadius: 0,
        width: 230,
        height: 45,
        marginBottom: 30,
      },
    
      TextInput: {
        height: 50,
        padding: 5,
        marginLeft: 10,
        justifyContent: 'flex-start',
        color:'black'
      },
    
    
    
      loginBtn: {
        width: 220,
        borderRadius: 25,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
        backgroundColor: '#560CCE',
      },
    
      loginText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
      },
    
     
    });
  