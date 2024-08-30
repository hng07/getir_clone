import React from 'react'
import { View,Text,Image,TouchableOpacity,Dimensions } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { Product } from '../../models';
import { useNavigation } from '@react-navigation/native';

const {width,height} =Dimensions.get('window')

type productItemType={
  item:Product
}
function index({item}:productItemType) {
  const navigation =useNavigation()
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate("ProductDetails",{product:item})}
      style={{
      width:width*0.30,
      marginTop:12,
      //backgroundColor:'red',
      height:height*0.24,
      marginLeft:12,
      marginBottom:6}}>
      <Image style={{width:width*0.30,height:height*0.15,borderRadius:12,borderWidth:0.2,borderColor:'gray'}}source={{uri:item.image}}/>
      <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
        <Text style={{fontSize:12,color:"#747990",textDecorationLine:'line-through'}}>
          <Text>{"\u20BA"}</Text>{item.fiyat}
        </Text>
        <Text style={{color:"#5d3ebd",fontWeight:'bold',fontSize:12.5,marginLeft:4}}>
          <Text>{"\u20BA"}</Text>{item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{fontSize:13,fontWeight:'600',marginTop:5}}>{item.name}</Text>
      <Text style={{color:'#747990',fontSize:12,marginTop:4,fontWeight:'500'}}>{item.miktar}</Text>
      <View style={{alignItems:'center',shadowRadius:3.8,shadowOpacity:0.07,justifyContent:'center',width:30,height:30,borderWidth:0.3,borderColor:'lightgrey',backgroundColor:'white',position:'absolute',right:-6,top:-6,borderRadius:6}}>
      <Entypo name="plus" size={22} color="#5d3ebd" />

      </View>
    
    </TouchableOpacity>
  )
}

export default index