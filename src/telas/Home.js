import React from "react";
import { StyleSheet, Image, Dimensions, Text, View, Button, TouchableOpacity} from 'react-native';
import topo from '../../assets/topo.jpg';
import topo2 from '../../assets/topo2.jpg';
import topo3 from '../../assets/topo3.jpg';
import * as Animatable from 'react-native-animatable';

const width = Dimensions.get('screen').width;



const Home = ({ navigation }) => {
    return <>
      <Image source={topo} style={imagens.topo}/>

      
      <Text style={textos.titulo}>BOA TARDE,</Text>
      <Text style={textos.aluno}>Jonathan</Text>
      <Text style={textos.treino}>MEU TREINO</Text>
     
      <View >
        <TouchableOpacity onPress={() => navigation.navigate("TreinoA")}>
          <Image  source={require('../../assets/topo2.jpg')} 
                  style={imagens.imagem}  
          />
          <Text style={textos.A}>A</Text>
          <Text style={textos.treino1}>Pernas, Gluteo, Lombar</Text>
          
        </TouchableOpacity>
      </View>

      <View >
        <TouchableOpacity onPress={() => navigation.navigate("TreinoB")}>
          <Image  source={require('../../assets/topo3.jpg')} 
                  style={imagens.imagem}  
          />
          <Text style={textos.B}>B</Text>
          <Text style={textos.treino2}>Peito, Costa, Braços</Text>
        </TouchableOpacity>
        <View style={{width: '100%', height: 15,}} />
        <View style={{width: '100%', height: 15, backgroundColor: '#c1c4c9', }} />

   </View>
    </>
}


const imagens = StyleSheet.create({
    topo: {
        width: "100%",
        height: 150 / 550 * width,
    },
    container: {
        flexDirection: 'row',
    },
    imagem: {
      width: "90%",
      height: 100,
      borderWidth: 5,
      margin: 10,
      borderRadius: 10 / 1,
      alignSelf: 'center',
    },
    
})

const textos = StyleSheet.create({
   titulo:{
        width: "100%",              
        position: "absolute",
        textAlign: "left",
        fontSize: 12.9,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 10,
        opacity: 0.7,
    },
    aluno:{
        width: "100%",               
        position: "absolute",
        textAlign: "left",
        fontSize: 30.3,
        lineHeight: 90,
        color: "yellow",
        fontWeight: "bold",
        padding: 5,
        opacity: 1,
    },
    treino:{
        width: "100%",               
        position: "relative",
        textAlign: "left",
        fontSize: 12.9,
        lineHeight: 20,
        color: "gray",
        fontWeight: "bold",
        padding: 10,
        opacity: 1,
    },
    treino1:{
        width: "110%",               
        position: "absolute",
        textAlign: "left",
        fontSize: 25,
        lineHeight: 1,
        color: "white",
        padding: 70,
        opacity: 1,        
    },
    A:{
      width: "110%",               
      position: "absolute",
      textAlign: "left",
      fontSize: 25,
      lineHeight: 47,
      color: "white",
      fontWeight: "bold",
      padding: 35,
      opacity: 1,
    },
    treino2:{
        width: "110%",               
        position: "absolute",
        textAlign: "left",
        fontSize: 25,
        lineHeight: 1,
        color: "white",
        padding: 70,
        opacity: 1,
    },
    B:{
      width: "110%",               
      position: "absolute",
      textAlign: "left",
      fontSize: 25,
      lineHeight: 50,
      color: "white",
      fontWeight: "bold",
      padding: 35,
      opacity: 1,
    },
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;