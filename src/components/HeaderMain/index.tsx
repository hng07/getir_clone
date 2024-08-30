import React from 'react'
import { View, Text,Image } from 'react-native'
import styles from './styles'
import Entypo from '@expo/vector-icons/Entypo';

function index() {
  return (
    <View style={styles.headerMain}>
        <View style={styles.headerOne}>
            <Image style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
            <View style={styles.headerOneView}>
                <Text style={{fontWeight:'600',fontSize:16}}>Ev</Text>
                <Text style={{fontWeight:'500',fontSize:11,color:"#6f7480",marginLeft:6,marginRight:1}}>Antalya Teknokent Ar-Ge 2 Uluğbey Binası</Text>
                <Entypo name="chevron-small-right" size={22} color="#5f3ebd" /> 
            </View>
        <View style={styles.headerTwo}>
            <Text style={{fontSize:10,fontWeight:'bold',color:'#5d3ebd'}}>TVS</Text>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#5d3ebd'}}>13 
                <Text style={{fontSize:16,color:'#5d3ebd'}}>dk</Text></Text>
        </View>

        </View>
    </View>
  )
}

export default index