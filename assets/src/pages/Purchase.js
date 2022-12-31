import {TouchableOpacity,View,StyleSheet,Text,FlatList,ScrollView,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const DATA = [
  {
    date:"1-12-22",
    id:"1",
    name:"chalk",
    quatity:"4",
    rate:"34",
    suplier:"ram",
    total:"500",
    invoiceno:"345678",
  },
   
];


const Item = ({ name,id,date,quantity,rate,suplier,total,invoiceno}) => (
  <View style={styles.item}>
   
    <Text style={styles.title} >
    
    <TouchableOpacity 
    onPress={()=>Alert.alert("Alert"," Are you sure want to edit?",[{text:"yes"},{text:"no"}])}>

      <Icons name="update" color="#560CCE" size={18} style={{paddingLeft:4}} />

    </TouchableOpacity>
   
    <TouchableOpacity 
    onPress={()=>Alert.alert("Alert"," Are you sure want to delete?",[{text:"yes"},{text:"no"}])}>

      <Icons name="delete" color="#560CCE" size={18} style={{paddingLeft:15}} />

    </TouchableOpacity>

     <View style={{paddingLeft:8}}>
      <Text >
        {id}
      </Text>
    </View>
    
    <View style={{paddingLeft:5}}>
      <Text >
        {name}
      </Text>
    </View>

    <View style={{paddingLeft:5}}>
      <Text >
        {quantity}
      </Text>
    </View>

    <View style={{paddingLeft:5}}>
      <Text >
        {rate}
      </Text>
    </View>

    
    <View style={{paddingLeft:5}}>
      <Text >
        {total}
      </Text>
    </View>

    <View style={{paddingLeft:5}}>
      <Text >
        {date}
      </Text>
    </View>
    
    <View style={{paddingLeft:5}}>
      <Text >
        {invoiceno}
      </Text>
    </View>

    <View style={{paddingLeft:5}}>
      <Text >
        {suplier}
      </Text>
    </View>


    </Text>
    
  </View>
);


const Purchase = ({ navigation }) => {
    const renderItem = ({ item }) => (
    <Item id={item.id} name={item.name} quantity={item.quantity} rate={item.rate} total={item.total}  invoiceno={item.invoiceno} suplier={item.suplier} date={item.date} /> 
  );
    

    return (
      <>
      <ScrollView style={{backgroundColor:"#ecf0f1"}}>
      <View >
       

       <TouchableOpacity onPress={() => navigation.navigate("Addpurchase")}>
        <View style={styles.add}>
          
          <Text style={{color:"#fff",fontSize:22}}>Add <Ionicons name="add-circle-outline" color="#fff" size={26} /></Text>
          
        </View>
       </TouchableOpacity>
       
      <View style={{marginTop:40,}}>
      
        <Text style={styles.heading}>Purchase Entry</Text>
     
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
  
export default Purchase;
