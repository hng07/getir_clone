import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Entypo,FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab=createBottomTabNavigator()

function RootNavigator() {

    const CustomTabBarButton = ({children}) => {
        return(
            <TouchableOpacity 
            style={{
                width:59,
                height:59,
                backgroundColor:"#5c3ebc",
                justifyContent:'center',
                alignItems:'center',
                borderRadius:33,
                marginTop:-5,
                borderWidth:3,
                borderColor:'white',
            }}>
                <Entypo name="list" size={24} color="#ffd00c" />
            </TouchableOpacity>
        )
    }

  return (
    <Tab.Navigator 
        initialRouteName='Ana Sayfa'
        screenOptions={{
            tabBarHideOnKeyboard:true,
            tabBarShowLabel:false,
            tabBarActiveTintColor:"#5c3ebc",
            tabBarInactiveTintColor:"#959595",
            headerShown:false,
            tabBarStyle:{
                height:80,
            },
        }}
    >
        <Tab.Screen
        name='Ana Sayfa'
        component={HomeNavigator}
        options={{
            tabBarIcon:({color}) => (
                <Entypo name="home" size={28} color={color} />

            )
        }}
        />
        <Tab.Screen
        name='Search'
        component={HomeNavigator}
        options={{
            tabBarIcon:({color}) => (
                <FontAwesome name="search" size={24} color={color} />
            )
        }}
        />
        <Tab.Screen
            name='List'
            component={HomeNavigator}
            options={{
                tabBarButton:(props) => <CustomTabBarButton {...props}/>
            }}
        />
        <Tab.Screen
        name='User'
        component={HomeNavigator}
        options={{
            tabBarIcon:({color}) => (
                <FontAwesome name="user" size={24} color={color} />

            )
        }}
        />
        <Tab.Screen
        name='Gift'
        component={HomeNavigator}
        options={{
            tabBarIcon:({color}) => (
                <MaterialCommunityIcons name="gift" size={24} color={color} />

            )
        }}
        />
    </Tab.Navigator>
  )
}

export default RootNavigator