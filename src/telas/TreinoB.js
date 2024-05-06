import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { imagens, styles } from './css/styles_treino';

const TreinoB = ({ navigation }) => {
 
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Peito, Costa, Braços</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoB/supino.jpg')} 
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Supino Maquina</Text>   
              <Text style={styles.repeticoes}>4  x 12</Text> 
            </View> 
          </View>        
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro2")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoB/voador.jpg')} 
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Voadora Peitoral</Text> 
              <Text style={styles.repeticoes}>4  x 12</Text>    
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro3")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoB/remada.jpg')} 
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Remada Sentado</Text>
              <Text style={styles.repeticoes}>4  x 12</Text> 
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoB/pulley.png')} 
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Pulley p/ frente</Text>   
              <Text style={styles.repeticoes}>4  x 12</Text>  
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoB/triceps_pulley.jpg')}
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Triceps Pulley</Text>   
              <Text style={styles.repeticoes}>3  x 10</Text>  
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoB/rosca.jpg')}
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Rosca Bilateral Direta</Text>   
              <Text style={styles.repeticoes}>3  x 10</Text>  
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoA/supra.png')} 
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Abdominal Supra</Text>   
              <Text style={styles.repeticoes}>5  x 5</Text>  
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoA/infra.jpg')}
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Abdominal Infra</Text>   
              <Text style={styles.repeticoes}>2  x 20</Text>  
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoA/esteira.png')} 
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Esteira</Text>   
              <Text style={styles.repeticoes}>30</Text>  
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TreinoB;