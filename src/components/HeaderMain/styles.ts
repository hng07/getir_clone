import { StyleSheet,Dimensions } from "react-native";

const {height} =Dimensions.get('window')

const styles =StyleSheet.create({
    headerMain:{
        height:height*0.064,
        backgroundColor:'#f7d102',
    },
    headerOne:{
        height:height*0.064,
        width:'80%',
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'2%',
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
    },
    headerOneView:{
        flexDirection:'row',
        alignItems:'center',    
        marginLeft:8,
        paddingLeft:8,
        borderLeftColor:'#f3f2fd',
        borderLeftWidth:3,
    },
    image:{
        width:30,
        height:30,
    },
    headerTwo:{
        width:'20%',
        height:height*0.064,
        //backgroundColor:'red',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:15,
        marginLeft:15
    },
})

export default styles;