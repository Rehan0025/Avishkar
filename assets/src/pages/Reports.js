import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

export default function Reports() {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.paragraph}>
        Reports
      </Text>
      <TouchableOpacity>
      <Card style={styles.card}>  

        <Text style={styles.text}> Custom Range </Text>
        
      </Card>
      </TouchableOpacity>
      <TouchableOpacity>
      <Card style={styles.card}>

        <Text style={styles.text}>        Today          </Text>
       
      </Card>
      </TouchableOpacity>
      <TouchableOpacity>
      <Card style={styles.card}>

        <Text style={styles.text}>      Yesterday    </Text>

      </Card>
      </TouchableOpacity>
      <TouchableOpacity>
      <Card style={styles.card}>

        <Text style={styles.text}>        Weekly       </Text>

      </Card>
      </TouchableOpacity>
      <TouchableOpacity>
      <Card style={styles.card}>

        <Text style={styles.text}>      Monthly      </Text>

      </Card>
      </TouchableOpacity>
      <TouchableOpacity>
       <Card style={styles.card}>

        <Text style={styles.text}>        Yearly        </Text>

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
    color:"#8854dc"
  },
  card:{
    marginTop:5,
    marginRight:25,
    marginLeft:25,
    marginBottom:6,
    paddingHorizontal:50,
    paddingVertical:50,
    flexDirection:"row",
    alignSelf:"center"
  },
  text:{
    alignSelf:"center",
    fontSize:18,
    fontWeight:'bold'
  }
});