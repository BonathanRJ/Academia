import React from "react";
import { createStackNavigator, Header, View, Text } from "@react-navigation/stack";
import Home from "./Home";
import Contact from "./Contact";
import TreinoA from './TreinoA';
import TreinoB from './TreinoB';
import Dentro1 from './Dentro1';
import Dentro2 from './Dentro2';
import Dentro4 from './Dentro4';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();



function MainStackNavigator()  {

  return (
    
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="TreinoA" component={TreinoA} 
       options={{
          title: 'Treino A',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle:{
          fontWeight: 'bold',
          },
          headerStyle: {
          height: 120,
          shadowColor: 'transparent',
          backgroundColor: '#222222',
          },
        }}
      />
      <Stack.Screen name="TreinoB" component={TreinoB} 
      options={{
        title: 'Treino B',
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitleStyle:{
        fontWeight: 'bold',
        },
        headerStyle: {
        height: 120,
        shadowColor: 'transparent',
        backgroundColor: '#222222'
        },
      }}
      />
      <Stack.Screen name="Dentro1" component={Dentro1} 
          options={{
          title: 'Treino A',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle:{
          fontWeight: 'bold',
          },
          headerStyle: {
          height: 120,
          shadowColor: 'transparent',
          backgroundColor: '#222222'
          },
        }}
      />
      <Stack.Screen name="Dentro2" component={Dentro2} 
          options={{
          title: 'Treino A',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle:{
          fontWeight: 'bold',
          },
          headerStyle: {
          height: 120,
          shadowColor: 'transparent',
          backgroundColor: '#222222'
          },
        }}
      /> 
      <Stack.Screen name="Dentro4" component={Dentro4} 
        options={{
          title: 'Treino A',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle:{
          fontWeight: 'bold',
          },
          headerStyle: {
          height: 120,
          shadowColor: 'transparent',
          backgroundColor: '#222222'
          },
        }}
      />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator };