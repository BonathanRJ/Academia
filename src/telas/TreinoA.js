import React from "react";
import { View, StyleSheet, Text,TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const TreinoA = ({navigation}) => {
 
  return (
    
    <ScrollView>
      
    <View style={styles.container}>
      <Text style={textos.titulo}>Pernas, Gluteo, Lombar</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
        <Image  source={require('../../assets/TreinoA/sumo.png')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Agachamento Sumo Halter</Text>   
       <Text style={textos.repeticoes}>4  x 12</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro2")}>
        <Image  source={require('../../assets/TreinoA/legpress.jpg')} 
                style={imagens.imagem}
        />

       <Text style={textos.treinos}>Leg Press 45°</Text> 
       <Text style={textos.repeticoes}>4  x 12</Text>    
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
        <Image  source={require('../../assets/TreinoA/leghorizontal.jpg')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Leg Horizontal</Text>
       <Text style={textos.repeticoes}>4  x 12</Text> 
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
        <Image  source={require('../../assets/TreinoA/abdutora.jpg')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Abdutora</Text>   
       <Text style={textos.repeticoes}>4  x 12</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
        <Image  source={require('../../assets/TreinoA/extensora.jpg')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Extensora</Text>   
       <Text style={textos.repeticoes}>3  x 10</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
        <Image  source={require('../../assets/TreinoA/flexora_deitada.jpg')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Flexora deitado</Text>   
       <Text style={textos.repeticoes}>3  x 10</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
        <Image  source={require('../../assets/TreinoA/gluteo.png')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Gluteo maquina</Text>   
       <Text style={textos.repeticoes}>5  x 5</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
        <Image  source={require('../../assets/TreinoA/supra.png')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Abdominal Supra</Text>   
       <Text style={textos.repeticoes}>2  x 20</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
        <Image  source={require('../../assets/TreinoA/infra.jpg')} 
                style={imagens.imagem}
        />
       <Text style={textos.treinos}>Abdominal Infra</Text>   
       <Text style={textos.repeticoes}>2  x 20</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
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
  },
  teste: {
    width: "85%",
    height: 200 ,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    alignSelf: 'center',
  },
}
)

export default TreinoA;