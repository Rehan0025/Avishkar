import * as React from 'react';
import { Text, View, StyleSheet,ScrollView ,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

export default function Dashboard({ navigation }) {
  return (
    <>
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.paragraph}>
        DashBoard
      </Text>
      <TouchableOpacity>
      <Card style={styles.card}>
        <Text style={styles.text}>    Total Product    </Text>
        <Text style={styles.numbers}>  56  </Text>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity>
      <Card style={styles.card}>
        <Text style={styles.text}>    Total Supplier   </Text>
        <Text style={styles.numbers}>68</Text>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity>
      <Card style={styles.card}>
        <Text style={styles.text}>   Total Customer  </Text>
        <Text style={styles.numbers}>7</Text>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity>
      <Card style={styles.card}>
        <Text style={styles.text}>   Total Purchase  </Text>
        <Text style={styles.numbers}>2678</Text>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity>
      <Card style={styles.card}>
        <Text style={styles.text}>      Total  Order    </Text>
         <Text style={styles.numbers}>288</Text>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity>
      <Card style={styles.card}>
        <Text style={styles.text}>Total Department</Text>
         <Text style={styles.numbers}>84</Text>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity>
      <Card style={styles.card}>
        <Text style={styles.text}>   Total Company  </Text>
        <Text style={styles.numbers}>16</Text>
      </Card>
      </TouchableOpacity>
    </ScrollView>
    </View>
    </>
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
    marginBottom:10,
    paddingHorizontal:50,
    paddingVertical:50,
    flexDirection:"row",
    alignSelf:"center",
    overflow:'hidden'
  },
  text:{
    alignSelf:"center",
    fontSize:18
  },
  numbers:{
    alignSelf:"center",
    fontSize:20,
    color:"#560cce",
    
  },

});
