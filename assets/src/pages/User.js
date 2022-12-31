import {TouchableOpacity,View,StyleSheet,Text,FlatList,ScrollView,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const DATA = [
  {
    id: '1',
    name: 'Sam',
    password:'5jiiradd'
  },
 
];


const Item = ({ id,name,password}) => (
  <View style={styles.item}>
   
    <Text style={styles.title} >
    
    <TouchableOpacity 
    onPress={()=>Alert.alert("Alert"," Are you sure want to edit?",[{text:"yes"},{text:"no"}])}>

      <Icons name="update" color="#560CCE" size={18} style={{paddingLeft:4}} />

    </TouchableOpacity>
   
    <TouchableOpacity 
    onPress={()=>Alert.alert("Alert"," Are you sure want to delete?",[{text:"yes"},{text:"no"}])}>

      <Icons name="delete" color="#560CCE" size={18} style={{paddingLeft:20}} />

    </TouchableOpacity>

    <View style={{paddingLeft:20}}>
      <Text >
       {id}
      </Text>
    </View>

    <View style={{paddingLeft:20}}>
      <Text >
       {name}
      </Text>
    </View>
     <View  style={{paddingLeft:20}}>
      <Text >
       {password}
      </Text>
    </View>
    </Text>
    
  </View>
);


const User = ({ navigation }) => {
    const renderItem = ({ item }) => (
    <Item id={item.id} name={item.name} password={item.password}/>
  );
    

    return (
      <>
      <ScrollView style={{backgroundColor:"#ecf0f1"}}>
      <View  >
      <TouchableOpacity onPress={() => navigation.navigate("Adduser")}>
        <View style={styles.add}>
          
          <Text style={{color:"#fff",fontSize:22}}>Add <Ionicons name="add-circle-outline" color="#fff" size={26} /></Text>
          
        </View>
       </TouchableOpacity>

      <View style={{marginTop:40,}}>
      
        <Text style={styles.heading}>User</Text>
     
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{fontSize:18}}
           />
      
      </View>
      </View>
      </ScrollView>
    </> 
    );
  };
      
   const styles = StyleSheet.create({

    add:{
    backgroundColor:"#560CCE",
    marginTop:20,
    marginLeft:15,
    marginRight:15,
    paddingHorizontal:120,
    paddingVertical:20,
    alignSelf:"center"
    },
    
     item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    
  },
  title: {
    fontSize: 18,
    color:"#560CCE",
    
  },
  heading:{
    color:"#560CCE",
    fontSize:18,
    alignSelf:"center"
  }
  });    
  
export default User;
