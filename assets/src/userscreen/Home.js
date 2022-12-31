import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.paragraph}>
        User Homepage
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Order")}>
      <Card style={styles.card}>

        <Text style={styles.text}>   Order  <Icons name="order-bool-ascending" color="#560CCE" size={25} style={{alignSelf:"center",marginTop:20}}  /></Text>
       
      </Card>
      </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("History")}>
      <Card style={styles.card}>

        <Text style={styles.text}> History <Icons name="history" color="#560CCE"  size={25} style={{alignSelf:"center",marginTop:20}}  /></Text>
        
      </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Card style={styles.card}> 

      <Text style={styles.text}>   Profile <Icons name="face-man-outline" color="#560CCE"  size={25} style={{alignSelf:"center",marginTop:20}}  /></Text>
    
      </Card>
      </TouchableOpacity>
     
     
      
      
    </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"#560CCE"
  },
  card:{
    marginTop:5,
    marginRight:25,
    marginLeft:25,
    marginBottom:30,
    paddingHorizontal:45,
    paddingVertical:42,
    flexDirection:"row",
    alignSelf:"center"
  },
  text:{
    alignSelf:"center",
    fontSize:22,
    fontWeight:'bold'
  },
  
});