import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { imagens, styles } from './css/styles_treino';

const TreinoA = ({ navigation }) => {
 
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Pernas, Glúteo, Lombar</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoA/sumo.png')} 
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Agachamento Sumo Halter</Text>   
              <Text style={styles.repeticoes}>4  x 12</Text> 
            </View> 
          </View>        
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro2")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoA/legpress.jpg')} 
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Leg Press 45°</Text> 
              <Text style={styles.repeticoes}>4  x 12</Text>    
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro3")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoA/leghorizontal.jpg')} 
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Leg Horizontal</Text>
              <Text style={styles.repeticoes}>4  x 12</Text> 
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoA/abdutora.jpg')} 
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Abdutora</Text>   
              <Text style={styles.repeticoes}>4  x 12</Text>  
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoA/extensora.jpg')} 
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Extensora</Text>   
              <Text style={styles.repeticoes}>3  x 10</Text>  
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoA/flexora_deitada.jpg')} 
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Flexora deitado</Text>   
              <Text style={styles.repeticoes}>3  x 10</Text>  
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Dentro1")}>
          <View style={styles.container_exercicio}>
            <Image  
              source={require('../../assets/TreinoA/gluteo.png')} 
              style={imagens.imagem}
            />
            <View style={styles.container_textos}>
              <Text style={styles.treinos}>Glúteo máquina</Text>   
              <Text style={styles.repeticoes}>5  x 5</Text>  
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
              <Text style={styles.repeticoes}>2  x 20</Text>  
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

export default TreinoA;