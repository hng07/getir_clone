import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { Product } from '../../models'

type CartItemProps = {
    product: Product
}
const { width, height } = Dimensions.get('window')

function index({ product }: CartItemProps) {
    return (
        <View style={{ height: height * 0.15, flexDirection:'row',alignItems:'center',justifyContent:'space-between', paddingHorizontal: width * 0.04, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: width * 0.23, height: height * 0.1 }} source={{ uri: product.image }} />
                <View style={{ marginLeft: 8 }}>
                    <Text style={{ fontSize: 13, fontWeight: '600' }}>{product.name}</Text>
                    <Text style={{ fontSize: 12, marginTop: 3, color: '#848897', fontWeight: '600' }}>{product.miktar}</Text>
                    <Text style={{ color: '#5d3ebd', fontWeight: 'bold', fontSize: 15, marginTop: 6 }}>
                        <Text>{"\u20BA"}</Text>
                        {product.fiyat}
                    </Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Text>-</Text>
                </View>
                <View>
                    <Text>1</Text>
                </View>
                <View>
                    <Text>+</Text>
                </View>
            </View>
        </View>
    )
}

export default index