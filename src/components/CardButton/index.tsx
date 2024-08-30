import React from 'react'
import { View, TouchableOpacity ,Text, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
function index() {
    return (
        <TouchableOpacity style={{ justifyContent:'center',position:'absolute',bottom:0, width: '100%', height: height * 0.13, backgroundColor: 'white' }}>
            <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#5d39c1',height:height*0.06,width:'90%',marginHorizontal:'5%',borderRadius:10,marginTop:-10}}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>Sepete Ekle</Text>
            </View>
        </TouchableOpacity>
    )
}

export default index