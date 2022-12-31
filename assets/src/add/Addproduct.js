import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StatusBar,
    } from 'react-native';
   import { collection, setDoc ,doc} from "firebase/firestore"; 
   import {auth,db} from '../../firebase/firebase.config';
   import React, {useState} from 'react';
    
    export default function Addproduct() {
       const [productId, setProductID] = useState(null);
       const [pname, setPname] = useState(null);
       const [cname, setCname] = useState(null);
       const [sup, setSup] = useState(null);
       const [exdt, setExdt] = useState(null);

       const saveData=async()=>{
        // const docRef = await addDoc(collection(db, "products"), {
        //   pid:productId,
        //   pname:pname,
        //   company:cname,
        //   supplier:sup,
        //   expirydt:exdt
        await setDoc(doc(db, "products", auth.currentUser.uid), {
          pid:productId,
          pname:pname,
          company:cname,
          supplier:sup,
          expirydt:exdt
        })
        .then(()=>{
          alert('Your product is updated')
        })
        
        console.log("document written with id:",docRef.id)
       }
      return (
        <View style={styles.mainContainer}>
          <StatusBar style="auto" />
          <Text style={styles.textContainer}> ADD PRODUCT</Text>
    
          <View style={styles.loginContainer} />
    
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="PRODUCT ID."
              placeholderTextColor="#003f5c"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text)=>setProductID(text)}
            />
            
             
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="PRODUCT NAME."
              placeholderTextColor="#003f5c"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text)=>setPname(text)}
            />
            </View>
  
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="COMPANY NAME."
              placeholderTextColor="#003f5c"
              onChangeText={(text)=>setCname(text)}
              autoCapitalize="none"
              autoCorrect={false}
              
              
            />
          </View>
  
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="SUPPLIER."
              placeholderTextColor="#003f5c"
              onChangeText={(text)=>setSup(text)}
              autoCapitalize="none"
              autoCorrect={false}

            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="EXPIERY DATE."
              placeholderTextColor="#003f5c"
              // secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text)=>setExdt(text)}
            />
          </View>
    
          
    
          {/* //! add Button */}
          <TouchableOpacity style={styles.loginBtn} onPress={()=>saveData()}>
            <Text style={styles.loginText}>ADD</Text>
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
        top: -20,
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
        marginBottom: 50,
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
        backgroundColor: '#560cce',
      },
    
      loginText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
      },
    
     
    });
  