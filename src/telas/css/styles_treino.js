
import { StyleSheet } from "react-native";

export const imagens = StyleSheet.create({
  imagem: {
    width: '30%',
    height: 110 ,
    borderBottomWidth: 0.8,
    borderColor: 'gray', 
  },
});

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222222',
  },
  container_exercicio:{
    flexDirection: 'row',
    backgroundColor: '#222222',
    borderBottomWidth: 1,
    borderColor: 'gray', 
  },
  container_textos:{
    width: '70%',
    height: 110 ,
  },
  titulo:{  
    fontSize: 23.5,
    lineHeight: 20,
    color: "white",
    padding: 16,
    backgroundColor: '#222222',
    borderBottomWidth: 0.5,
    borderColor: 'gray', 
   },  
  treinos:{
    borderColor: 'gray', 
    fontSize: 18,
    color: "white",
    padding: 14,
    backgroundColor: '#222222'
  },
  repeticoes:{
    fontSize: 15,
    color: "#fcb103",
    fontWeight: "bold",
    paddingLeft: 16,
  },
});
