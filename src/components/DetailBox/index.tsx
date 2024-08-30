import React from 'react'
import { View,Text } from 'react-native'

type DetailBoxProps={
    price:number;
    name:string;
    quantity:string;
}

function index({price,name,quantity}:DetailBoxProps) {
  return (
    <View style={{width:'100%',alignItems:'center',backgroundColor:'white'}}>
        <Text style={{color:'#5d3ebd',fontWeight:'bold',fontSize:20,margin:12}}>
            <Text>{"\u20BA"}</Text>
            {price}
        </Text>

        <Text style={{fontWeight:'600',fontSize:16,marginTop:6}}>
            {name}
        </Text>

        <Text style={{color:'#848897',fontWeight:'600',marginTop:6,paddingBottom:17}}>
            {quantity}
        </Text>
    </View>
  )
}

export default index