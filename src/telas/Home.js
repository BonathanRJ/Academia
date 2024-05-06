import React from "react";
import { StyleSheet, Dimensions, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
const width = Dimensions.get('screen').width;

const Home = ({ navigation }) => {
    return <>
      
      <View style={container.container_geral}>
        <ImageBackground source={require('../../assets/topo.jpg')} resizeMode="cover" style={imagens.topo}>
          <View style={textos.inicio}>
            <Text style={textos.titulo}>BOA TARDE,</Text>
            <Text style={textos.aluno}>Jonathan</Text>
            <Text style={textos.treino}>MEU TREINO</Text>
          </View> 
        </ImageBackground>
        <TouchableOpacity onPress={() => navigation.navigate("TreinoA")} style={imagens.imagem}>
          <ImageBackground source={require('../../assets/topo2.jpg')} style={styles.button} imageStyle={{ borderRadius: 10,}}>
            <View style={textos.texto_button}>
              <Text style={textos.letra_treino}>A</Text>
              <Text style={textos.titulo_treino}>Pernas, Gluteo, Lombar</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TreinoB")} style={imagens.imagem}>
          <ImageBackground source={require('../../assets/topo2.jpg')} style={styles.button} imageStyle={{ borderRadius: 10,}}>
            <View style={textos.texto_button}>
            <Text style={textos.letra_treino}>B</Text>
              <Text style={textos.titulo_treino}>Peito, Costa, Braços</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View style={{width: '100%', height: 15,}} />
        <View style={{width: '100%', height: 15, backgroundColor: '#c1c4c9', }} />
      </View>
    </>
}

export const container = StyleSheet.create({
  container_geral: {
    flexDirection: 'column',
  },
});

export const imagens = StyleSheet.create({
  topo: {
    height: 150 / 550 * width,
  },
  imagem: {
    width: "90%",
    height: 100,
    margin: 15,
    alignSelf: 'center',        
  },
})

export const textos = StyleSheet.create({
  titulo:{           
    fontSize: 12.9,
    color: "white",
    fontWeight: "bold",
    opacity: 0.7,
  },
  aluno:{             
    fontSize: 30,
    color: "yellow",
    fontWeight: "bold",
  },
  treino:{            
    fontSize: 12.9,
    color: "white",
    fontWeight: "bold",
    marginTop: 5,
    opacity: 0.8,
  },
 
  texto_button:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: 20
  },
  letra_treino:{            
    fontSize: 25,
    color: "white",
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  titulo_treino:{            
    fontSize: 25,
    width: '90%',
    color: "white",
  },
  inicio:{
    flexDirection: 'column',
    padding: 15
  },
});

export const styles = StyleSheet.create({
  button:{
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Home;