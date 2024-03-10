import React from "react";
import { View, StyleSheet, Text,TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const TreinoB = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={textos.titulo}>Peito, Costa, Braços</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro4")}>
        <Image  source={require('../../assets/TreinoB/supino.jpg')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Supino Maquina</Text>   
       <Text style={textos.repeticoes}>5  x 10</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro4")}>
        <Image  source={require('../../assets/TreinoB/voador.jpg')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Voadora Peitoral</Text> 
       <Text style={textos.repeticoes}>5  x 10</Text>    
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro4")}>
        <Image  source={require('../../assets/TreinoB/remada.jpg')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Remada Sentado</Text>
       <Text style={textos.repeticoes}>5  x 10</Text> 
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro4")}>
        <Image  source={require('../../assets/TreinoB/pulley.png')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Pulley p/ frente</Text>   
       <Text style={textos.repeticoes}>5  x 10</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro4")}>
        <Image  source={require('../../assets/TreinoB/triceps_pulley.jpg')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Triceps Pulley</Text>   
       <Text style={textos.repeticoes}>5  x  5</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro4")}>
        <Image  source={require('../../assets/TreinoB/rosca.jpg')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Rosca Bilateral Direta</Text>   
       <Text style={textos.repeticoes}>5  x  5</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro4")}>
        <Image  source={require('../../assets/TreinoA/supra.png')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Abdominal Supra</Text>   
       <Text style={textos.repeticoes}>2  x 20</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro4")}>
        <Image  source={require('../../assets/TreinoA/infra.jpg')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Abdominal Infra</Text>   
       <Text style={textos.repeticoes}>2  x 20</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro4")}>
        <Image  source={require('../../assets/TreinoA/esteira.png')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Esteira</Text>   
       <Text style={textos.repeticoes}>30</Text>  
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const imagens = StyleSheet.create({
  imagem: {
    width: "34%",
    height: 110 ,
    borderWidth: 0.4,
    borderColor: 'gray', 
  },
})

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#222222',
  },
})

const textos = StyleSheet.create({
  titulo:{
    width: 313,     
    fontSize: 23.5,
    lineHeight: 20,
    color: "white",
    padding: 16,
    backgroundColor: '#222222'
   },  
   treinos:{
    width: 262, 
    height: 110 , 
    borderWidth: 0.4,
    borderColor: 'gray', 
    flexDirection: 'row',
    fontSize: 18,
    lineHeight: 50,
    color: "white",
    textAlign: 'left',
    alignSelf: 'flex-end',
    padding: 14,
    position: 'absolute',
   backgroundColor: '#222222'
  },
  repeticoes:{
      width: 262.2, 
      flexDirection: 'row',
      fontSize: 15,
      lineHeight: 120,
      color: "#fcb103",
      textAlign: 'left',
      alignSelf: 'flex-end',
      padding: 14,
      fontWeight: "bold",
      position: 'absolute',
  }
}
)

export default TreinoB;