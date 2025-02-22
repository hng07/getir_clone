import React,{useState} from 'react'
import { ScrollView,Text,Dimensions, TouchableOpacity } from 'react-native'

const {height,width}=Dimensions.get('window')

const TypeBox = ({setCat,item,active}: {setCat:any, item:string,active:string}) => {
    return (
        <TouchableOpacity onPress={()=>setCat(item)} 
        style={[{flexDirection:'row',alignItems:'center', paddingHorizontal:12,borderRadius:8,marginRight:12,height:height*0.044},item==active ?{backgroundColor:'#5c3ebc'}:{borderColor:'#f0eff7',borderWidth:1.3}]}>
            <Text style={[{fontSize:13,color:'#7849f7',fontWeight:'600'},item==active &&{color:'white'}]}>{item}</Text>
        </TouchableOpacity>
    )
}

function index() {

    const [category, setCategory] = useState<String>("Birlikte İyi Gider")

  return (
    <ScrollView 
    style={{width:'100%',height:height*0.07,backgroundColor:'white',flexDirection:'row',paddingVertical:height*0.014,paddingHorizontal:12,borderBottomColor:'lightgrey',borderBottomWidth:1}} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
        {["Birlikte İyi Gider","Çubuk","Kutu","Külah","Çoklu","Bar"].map((item) =>(
            <TypeBox setCat ={setCategory} item ={item} active={category}/>
        ))}
    </ScrollView>
  )
}

export default index