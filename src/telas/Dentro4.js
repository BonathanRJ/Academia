import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Swiper from 'react-native-swiper'

const aaa = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} >
          <View style={styles.resto}>
          <Image  source={require('../../assets/TreinoA/sumo.png')} 
                  style={imagens.imagem}
          />
          <Text style={styles.treinos}> Agachamento Sumo Halter</Text>
          <View style={{flexDirection:"row"}}>
            <View style={{flex:1, }}>
            <Text style={
              { backgroundColor: "white",
                alignSelf: 'flex-end',
                width: 167,
                height: 36,
                lineHeight: 50,
                fontSize: 13,
                color: "#fcb103",
              }}
            >  série</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={
              { backgroundColor: "white",
              alignSelf: 'flex-start',
              textAlign: 'right',
              width: 167,
              height: 36,
              lineHeight: 50,
              color: "#fcb103", 
              fontSize: 13,
              }}
            >Repetições  </Text>
            </View>
          </View>

          <View style={{flexDirection:"row"}}>
            <View style={{flex:1, }}>
            <Text style={
              { backgroundColor: "white",
                alignSelf: 'flex-end',
                width: 167,
                height: 32,
                lineHeight: 20,
                color: "#b0abab",
                fontSize: 19,
              }}
            >  3x</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={
              { backgroundColor: "white",
              alignSelf: 'flex-start',
              textAlign: 'right',
              width: 167,
              height: 32,
              lineHeight: 20,
              color: "#b0abab",
              fontSize: 19,
              }}
            >8a12  </Text>
            </View>
          </View>
          
          <View style={{flexDirection:"row"}}>
            <View style={{flex:1,}}>
            <Text style={
              { backgroundColor: "#e8e3e3",
                alignSelf: 'flex-end',
                width: 167,
                height: 75 ,
                lineHeight: 79,
                textAlign: 'center',
                borderTopWidth: 1,
                borderColor: 'gray', 
                borderBottomLeftRadius: 12,
              }}
            > carga </Text>
            </View>
            <View style={{flex:1,}}>
            <MaterialCommunityIcons style={
              { backgroundColor: "#e8e3e3",
                justifyContent: 'flex-end',
                width: 167,
                lineHeight: 50,
                height: 38 ,
                textAlign: 'center',
                borderLeftWidth: 1,
                borderTopWidth: 1,
                borderColor: 'gray', 
                fontSize: 30,
              }}
              name="note-edit-outline"
            />
            <Text style={
              { backgroundColor: "#e8e3e3",
                justifyContent: 'flex-end',
                width: 167,
                textAlign: 'center',
                borderLeftWidth: 1,
                borderBottomRightRadius: 12,
                height: 37 ,
                lineHeight: 20,
                borderBottomWidth: 0,
                borderColor: 'gray', 
                fontSize: 15,
              }}    
              
              >anotações </Text>

            </View>

          </View>

          


      </View>
      <View style={styles.resto}>
          <Image  source={require('../../assets/TreinoA/sumo.png')} 
                  style={imagens.imagem}
          />
          <Text style={styles.treinos}> Legpress Sumo Halter</Text>
          <View style={{flexDirection:"row"}}>
            <View style={{flex:1, }}>
            <Text style={
              { backgroundColor: "white",
                alignSelf: 'flex-end',
                width: 167,
                height: 36,
                lineHeight: 50,
                fontSize: 13,
                color: "#fcb103",
              }}
            >  série</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={
              { backgroundColor: "white",
              alignSelf: 'flex-start',
              textAlign: 'right',
              width: 167,
              height: 36,
              lineHeight: 50,
              color: "#fcb103", 
              fontSize: 13,
              }}
            >Repetições  </Text>
            </View>
          </View>

          <View style={{flexDirection:"row"}}>
            <View style={{flex:1, }}>
            <Text style={
              { backgroundColor: "white",
                alignSelf: 'flex-end',
                width: 167,
                height: 32,
                lineHeight: 20,
                color: "#b0abab",
                fontSize: 19,
              }}
            >  3x</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={
              { backgroundColor: "white",
              alignSelf: 'flex-start',
              textAlign: 'right',
              width: 167,
              height: 32,
              lineHeight: 20,
              color: "#b0abab",
              fontSize: 19,
              }}
            >8a12  </Text>
            </View>
          </View>
          
          <View style={{flexDirection:"row"}}>
            <View style={{flex:1,}}>
            <Text style={
              { backgroundColor: "#e8e3e3",
                alignSelf: 'flex-end',
                width: 167,
                height: 75 ,
                lineHeight: 79,
                textAlign: 'center',
                borderTopWidth: 1,
                borderColor: 'gray', 
                borderBottomLeftRadius: 12,
              }}
            > carga </Text>
            </View>
            <View style={{flex:1,}}>
            <MaterialCommunityIcons style={
              { backgroundColor: "#e8e3e3",
                justifyContent: 'flex-end',
                width: 167,
                lineHeight: 50,
                height: 38 ,
                textAlign: 'center',
                borderLeftWidth: 1,
                borderTopWidth: 1,
                borderColor: 'gray', 
                fontSize: 30,
              }}
              name="note-edit-outline"
            />
            <Text style={
              { backgroundColor: "#e8e3e3",
                justifyContent: 'flex-end',
                width: 167,
                textAlign: 'center',
                borderLeftWidth: 1,
                borderBottomRightRadius: 12,
                height: 37 ,
                lineHeight: 20,
                borderBottomWidth: 0,
                borderColor: 'gray', 
                fontSize: 15,
              }}    
              
              >anotações </Text>

            </View>
          </View>
      </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>aaaaaaaaa simple</Text>
            </View>
      </Swiper>
    )
  }
}


const imagens = StyleSheet.create({
  imagem: {
    width: "85%",
    height: 300 ,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    alignSelf: 'center',
    
  },
})


const styles = StyleSheet.create({
  treinos: {
    width: 334,
    height: 85 ,
    alignSelf: 'center',
    backgroundColor: "#e8e3e3",
    fontSize: 23.5,
    lineHeight: 85,
    
    
  },
  quadrado: {
    width: 334,
    height: 200,
    alignSelf: 'center',
    backgroundColor: "white",
    fontSize: 16,
    lineHeight: 45,
    textAlign: 'center',
    
  },
  resto: {
    flex: 1,
    backgroundColor: '#222222',
    flexDirection:"column",
    
    
  },
}
);

AppRegistry.registerComponent('myproject', () => SwiperComponent)