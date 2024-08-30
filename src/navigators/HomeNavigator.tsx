import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import ProductDatailsScreen from "../screens/ProductDetailsScreen"
import CartScreen from "../screens/CartScreen"
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native'


const { width, height } = Dimensions.get("window")
const Stack = createStackNavigator();

function MyStack({ navigation, route }) {

  const tabHiddenRoutes = ["ProductDetails"];

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    //console.log("Route Name is ",routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log("Kapat", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç", routeName);
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route])

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30, }} />
          )
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitle: () => (
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', }}>
              ÜRÜNLER
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("CartScreen")} style={{
              width: width * 0.22, height: 33, backgroundColor: 'white',
              marginRight: width * 0.03, borderRadius: 9, flexDirection: 'row', alignItems: 'center'}}>
              <Image style={{ width: 23, height: 23, marginLeft: 6 }} source={require("../../assets/cart.png")} />
              <View style={{height:33,width:4,backgroundColor:'white'}}/>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 33, borderTopRightRadius: 9, borderBottomRightRadius: 9, backgroundColor: '#f3effe' }}>
                <Text style={{color:'#5d3ebd',fontWeight:'bold',fontSize:12}}>
                  <Text>{"\u20BA"}</Text>
                  24,00
                </Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 12 }}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 15 }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 12 }}>
              <FontAwesome name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
          )
        }}
        name='ProductDetails'
        component={ProductDatailsScreen}
      />
      <Stack.Screen
      name='CartScreen'
      component={CartScreen}
      options={{
        headerTintColor:'white',
        headerBackTitleVisible:false,
        headerStyle:{backgroundColor:'#5c3ebc'},
        headerTitle: () => (
          <Text style={{fontWeight:'bold',fontSize:15,color:'white'}}>
            Sepetim
          </Text>
        ),
        headerLeft: () =>(
          <TouchableOpacity style = {{paddingLeft:10}}onPress={() => navigation.goBack()}>
            <Ionicons name="close-outline" size={26} color="white" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity style={{paddingRight:10}}>
            <Ionicons name="trash" size={26} color="white" />
          </TouchableOpacity>
        )
        //headerBa
      }}/>
    </Stack.Navigator>
  )
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />
}