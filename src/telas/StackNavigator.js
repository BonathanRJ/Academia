import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Contact from "./Contact";
import TreinoA from './TreinoA';
import TreinoB from './TreinoB';
import Dentro1 from './Dentro1';
import Dentro2 from './Dentro2';
import Dentro3 from './Dentro3';
import Swiper from 'react-native-swiper';
import { View, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const screenOptions = {
  headerTintColor: 'white',
  headerTitleAlign: 'center',
  headerTitleStyle: { fontWeight: 'bold' },
  headerStyle: { height: 120, shadowColor: 'transparent', backgroundColor: '#222222' },
};

const Dentro1Screen = () => <Dentro1 />;
const Dentro2Screen = () => <Dentro2 />;
const Dentro3Screen = () => <Dentro3 />;


const TreinoAScreen = (index) => () => (
  <Swiper loop={false} index={index}
    dot={<View style={styles.dot} />}
    activeDot={<View style={styles.activeDot} />}
  >
    <Dentro1Screen />
    <Dentro2Screen />
    <Dentro3Screen />
  </Swiper>
);

function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TreinoA"
        component={TreinoA}
        options={{ title: 'Treino A' }}
      />
      <Stack.Screen
        name="TreinoB"
        component={TreinoB}
        options={{ title: 'Treino B' }}
      />
      <Stack.Screen
        name="Dentro1"
        component={TreinoAScreen(0)}
        options={{ title: 'Treino A' }}
      />
      <Stack.Screen
        name="Dentro2"
        component={TreinoAScreen(1)}
        options={{ title: 'Treino A' }}
      />
      <Stack.Screen
        name="Dentro3"
        component={TreinoAScreen(2)}
        options={{ title: 'Treino A' }}
      />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#808080',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#f5a802',
    width: 10,
    height: 10,
    borderRadius: 6,
    marginHorizontal: 3,
  },
});

export { MainStackNavigator, ContactStackNavigator };
