import React from "react";
import {Text,View,StyleSheet,Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Firstpage = ({ navigation }) => {
    
    
    return (
      <View style={styles.mainContainer}>

      <Text style={styles.iconstyle}> 
      <Icon name="codesandbox" size={200} color="#fff" />
      </Text>
      <Text style={styles.textstyle}> Itemise </Text>
      <View style={{marginTop:50,marginLeft:40,marginRight:40,}}>
      <Button
        title="LOGIN"
        onPress={() => navigation.navigate("login")}
        color="#4D0AB9"
      />
      </View>
      </View>
           
    );
  };
      
   const styles = StyleSheet.create({
    mainContainer: {
      flex:1,
      justifyContent: 'center',
      backgroundColor:"#560CCE"
    },
    textstyle:{
      alignSelf:"center",
      color:"#fff",
      fontStyle:"italic"
    },
    iconstyle:{
      alignSelf:"center",
      paddingTop:100,
    },
    Button:{
      marginTop:50,
      padding:5
      },
  });    
  
export default Firstpage;