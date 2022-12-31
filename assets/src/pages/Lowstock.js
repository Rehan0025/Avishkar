import {TouchableOpacity,View,StyleSheet,Text,FlatList,ScrollView,Alert} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const DATA = [
  {
    id: '1',
    title: 'chalk',
    quantity:"5"
  },
  {
    id: '1',
    title: 'chalk',
    quantity:"5"
  },
{
    id: '1',
    title: 'chalk',
    quantity:"5"
  },
{
    id: '1',
    title: 'chalk',
    quantity:"5"
  },
{
    id: '1',
    title: 'chalk',
    quantity:"5"
  },
{
    id: '1',
    title: 'chalk',
    quantity:"5"
  },
{
    id: '1',
    title: 'chalk',
    quantity:"5"
  },
{
    id: '1',
    title: 'chalk',
    quantity:"5"
  },
{
    id: '1',
    title: 'chalk',
    quantity:"5"
  },
{
    id: '1',
    title: 'chalk',
    quantity:"5"
  },
{
    id: '1',
    title: 'chalk',
    quantity:"5"
  },
{
    id: '1',
    title: 'chalk',
    quantity:"5"
  },
{
    id: '1',
    title: 'chalk',
    quantity:"5"
  },
{
    id: '1',
    title: 'chalk',
    quantity:"5"
  },

];


const Item = ({ title,quantity }) => (
  <View style={styles.item}>
    
    <Text style={styles.title} >
    
    <TouchableOpacity >

      <Icons name="circle" color="#560CCE" size={14} style={{paddingLeft:4}} />

    </TouchableOpacity>
   
   
    <View style={{paddingLeft:100}}>
      <Text>
       {title}
      </Text>
    </View>
    <View style={{paddingLeft:140}}>
      <Text >
       {quantity}
      </Text>
    </View>

    </Text>
    
  </View>
);


const Lowstock = ({ navigation }) => {
    const renderItem = ({ item }) => (
    <Item title={item.title} quantity={item.quantity}  />
  );
    

    return (
      <>
      <ScrollView style={{backgroundColor:"#ecf0f1"}}>
      <Text style={{color:"#560CCE",fontSize:18,alignSelf:"center",marginTop:20,fontWeight:"500"}}> Lowstock </Text>
       
      <View style={{marginTop:10,}}>
     
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{fontSize:18}}
           />
     
      </View>
      </ScrollView>
    </> 
    );
  };
      
   const styles = StyleSheet.create({

  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    
  },
  title: {
    fontSize: 18,
    color:"#000",
    
  },
 
  });    
  
export default Lowstock;
