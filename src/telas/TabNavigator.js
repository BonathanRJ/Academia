import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from "@expo/vector-icons";


import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

const screenOptionStyle = {
    headerShown: false,
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      shadowOffset: {
          width: 0,
          height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
      elevation: 20,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      position: 'absolute',
      height: 50,
  },
  };

  const getRouName = (route)=>{
    const routeName = getFocusedRouteNameFromRoute(route)
    if  (routeName?.includes("TreinoA")     || 
        (routeName?.includes("Dentro1"))    || 
        (routeName?.includes("TreinoB"))
        )   
    {
        return 'none';
    }
    else 
    {
        return 'flex';
    }
    }

const BottomTabNavigator = () => {
    
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen 
        name="Treinos"
        component={MainStackNavigator} 
        options=
        {({route})  =>  ({
                          tabBarStyle: {display: getRouName(route)},
                          tabBarLabel:() => {return null},
                          tabBarIcon: (tabInfo) => (
                            <MaterialCommunityIcons
                              name="arm-flex"
                              size={tabInfo.focused ? 35 : 30}
                              color={tabInfo.tintColor}
                            />
                          ),
                        }
                        )
        }
        
      />
      <Tab.Screen 
        name="Contatos" 
        component={ContactStackNavigator}
        options=
        {{
          tabBarLabel:() => {return null},
          tabBarIcon: (tabInfo) => (
            <MaterialCommunityIcons 
              name="contacts" 
              color={tabInfo.tintColor}
              size={tabInfo.focused ? 35 : 30}
            />
          ),
        }}
        
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;