import React from 'react'
import { View, Text } from 'react-native'
import ProductItem from "../ProductItem"
import productsGetir from '../../../assets/productsGetir'
function index() {
  return (
    //  Main View
    <View>
      {/* 2 products  */}
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }}>
        {productsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}

      </View>
      <Text style={{ color: 'gray', fontWeight: 'bold', padding: 14 }}>Çubuk</Text>

      {/* aşağıdaki products  */}

      <View style={{flexDirection:'row',flexWrap:'wrap',flex:1,alignItems:'center',backgroundColor:'white',paddingVertical:10}}>
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  )
}

export default index