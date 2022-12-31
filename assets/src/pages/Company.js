import {TouchableOpacity,View,StyleSheet,Text,FlatList,ScrollView,Alert,Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Rungta dental',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Rungta Pharmacy',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Rungta rcst',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Rungta dental',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Rungta Pharmacy',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Rungta rcst',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Rungta dental',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Rungta Pharmacy',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Rungta rcst',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Rungta dental',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Rungta Pharmacy',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Rungta rcst',
  },
];


const Item = ({ title }) => (
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

    <View style={{paddingLeft:45}}>
      <Text >
       {title}
      </Text>
    </View>

    </Text>
    
  </View>
);


const Company = ({ navigation }) => {
    const renderItem = ({ item }) => (
    <Item title={item.title}  />
  );
    

    return (
      <>
      
      <View  style={{backgroundColor:"#ecf0f1"}}>
      <ScrollView>
       
        <View style={styles.add}>
         <TouchableOpacity onPress={()=>navigation.navigate("Addcompany")}>
          <Text style={{color:"#fff",fontSize:22}}>Add <Ionicons name="add-circle-outline" color="#fff" size={26} /></Text>
          </TouchableOpacity>
        </View>
       
       
      <View style={{marginTop:40,}}>
      
        <Text style={styles.heading}>Company</Text>
     
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{fontSize:18,}}
           />
      
      </View>
      </ScrollView>
      </View>
      
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
  
export default Company;
