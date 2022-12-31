import {TouchableOpacity,View,StyleSheet,Text,FlatList,ScrollView,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const DATA = [
  {
   name:"suresh",
   gstno:"234",
   address:"huse no 23,borsi",
   number:"7345678345"
  },
 
];


const Item = ({ name,gstno,address,number}) => (
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

    <View style={{paddingLeft:10}}>
      <Text >
       {gstno}
      </Text>
    </View>

    <View style={{paddingLeft:6}}>
      <Text >
       {name}
      </Text>
    </View>

    <View  style={{paddingLeft:6}}>
      <Text >
       {address}
      </Text>
    </View>

    <View  style={{paddingLeft:6}}>
      <Text >
       {number}
      </Text>
    </View>
    </Text>
    
  </View>
);


const Supplier = ({ navigation }) => {
    const renderItem = ({ item }) => (
    <Item gstno={item.gstno} name={item.name} address={item.address} number={item.number}/>
  );
    

    return (
      <>
      <ScrollView style={{backgroundColor:"#ecf0f1"}}>
      <View >

       <TouchableOpacity onPress={() => navigation.navigate("Addsupplier")}>
        <View style={styles.add}>
          
          <Text style={{color:"#fff",fontSize:22}}>Add <Ionicons name="add-circle-outline" color="#fff" size={26} /></Text>
          
        </View>
       </TouchableOpacity>
       
      <View style={{marginTop:40,}}>
      
        <Text style={styles.heading}>Supplier</Text>
     
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
    backgroundColor:'#fff',
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
  
export default Supplier;

