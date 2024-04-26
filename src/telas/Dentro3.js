import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput , View, SafeAreaView, Image, TouchableOpacity, Modal, Animated  } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Swiper from 'react-native-swiper';

import Dentro2 from "../telas/Dentro2"


export default class SwiperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempoRestante: 45,
      intervalo: null,
      iconeAtual: 'play-outline',
      modalVisible: false,
      modalVisibleNovo: false,
      translateY: new Animated.Value(500), 
      translateYNovo: new Animated.Value(500), 
      anotacaoText: '', 
      valorCarga: '0.0',
    };
  }
  

  toggleModal = () => {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: !modalVisible }, () => {
      this.animateModal();
    });
  };

  toggleModalNovo = () => {
    const { modalVisibleNovo } = this.state;
    this.setState({ modalVisibleNovo: !modalVisibleNovo }, () => {
      this.animateModalNovo();
    });
  };
  
  animateModal = () => {
    const { modalVisible, translateY } = this.state;
    Animated.timing(translateY, {
      toValue: modalVisible ? 0 : 500,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  animateModalNovo = () => {
    const { modalVisibleNovo, translateYNovo } = this.state;
    Animated.timing(translateYNovo, {
      toValue: modalVisibleNovo ? 0 : 500,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  
  handleMinusPress = () => {
    let { valorCarga } = this.state;
    let novoValor = parseFloat(valorCarga) - 1.0;
    novoValor = Math.max(0, parseFloat(novoValor.toFixed(1))); 
    this.setState({ valorCarga: novoValor.toFixed(1) });
  };
  
  handlePlusPress = () => {
    let { valorCarga } = this.state;
    let novoValor = parseFloat(valorCarga) + 1.0;
    this.setState({ valorCarga: novoValor.toFixed(1) });
  };
  
  iniciarContagemRegressiva = () => {
    const { intervalo } = this.state;
    if (!intervalo) {
      const novoIntervalo = setInterval(() => {
        let { tempoRestante } = this.state;
        tempoRestante -= 1;
        if (tempoRestante === 0) {
          clearInterval(novoIntervalo);
          this.setState({ tempoRestante: 5, intervalo: null, iconeAtual: 'play-outline' });
        } else {
          this.setState({ tempoRestante });
        }
      }, 1000);
      this.setState({ intervalo: novoIntervalo, iconeAtual: 'timelapse' });
    } else {
      clearInterval(intervalo);
      this.setState({ intervalo: null, iconeAtual: 'play-outline' });
    }
  };

  render() {
    const { tempoRestante, iconeAtual, modalVisible, translateY, anotacaoText, modalVisibleNovo, translateYNovo, valorCarga} = this.state;

    return (
      <View style={styles.container}>
      <Swiper style={styles.wrapper}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
      >
        <View style={styles.resto}>
          <Image source={require('../../assets/TreinoA/leghorizontal.jpg')} style={imagens.imagem} />
          <View style={{ width: 350, alignSelf: 'center', height: 1, backgroundColor: '#c1c4c9' }} />
          <View style={container.container}>
            <Text style={styles.exercicio}>Leg Horizontal</Text>
          </View>
          <View style={container.container}>
            <View>
              <Text style={descricao.serie}>Séries e Repetições</Text>
              <Text style={descricao.numero}>3x 12 a 15</Text>
            </View>

            <View style={container.container2}>
              <View>
                <Text style={descricao.carga}>Carga (kg)</Text>
                <Text style={descricao.numero1}>{valorCarga} </Text>
              </View>
              <TouchableOpacity style={{ alignSelf: 'center' }} onPress={this.toggleModalNovo}>
                <MaterialCommunityIcons style={descricao.icone1} name="pencil-outline" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={descricao.envolta}>
            <View style={descricao.descricao_container}>
              <Text style={descricao.descanso}>DESCANSO</Text>
              <View style={descricao.descricao_container_2}>
                <Text style={descricao.descanso_tempo}>{`00:${tempoRestante < 10 ? '0' + tempoRestante : tempoRestante}`}</Text>
                <TouchableOpacity onPress={this.iniciarContagemRegressiva}>
                <MaterialCommunityIcons style={descricao.icone2} name={iconeAtual} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={descricao.container_3}>
            <TouchableOpacity style={descricao.anotacao_container} onPress={this.toggleModal} >
              <MaterialCommunityIcons style={descricao.icone3} name="chat-processing-outline" />
              <Text style={descricao.anotacao}>Anotações</Text>
            </TouchableOpacity>
          </View>
        </View>

      </Swiper>
      
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={this.toggleModal}
        >
          
          <View style={styles.modalContainer}>
            <Animated.View style={[{ transform: [{ translateY }] }]}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitulo}>Inserir anotações</Text>
                <TouchableOpacity onPress={this.toggleModal} activeScale={2}>
                  <MaterialCommunityIcons style={styles.modalCloseButton} name="close" />
                </TouchableOpacity>
              </View>

              <View style={styles.modalContent_2}>
                <Text style={styles.modalText}>Utilize o campo abaixo para realizar suas anotações sobre o exercício. Elas ficarão disponíveis somente para você.</Text>
                <TextInput
                  style={styles.input}
                  multiline={true}
                  numberOfLines={4}
                  value={anotacaoText}
                  placeholder="Exemplo: Ajuste do banco, altura da máquina, etc."
                  onChangeText={(text) => this.setState({ anotacaoText: text })}
                />
              </View>
              <View style={styles.confirmar_container}>
                <TouchableOpacity onPress={this.toggleModal} activeScale={2}>
                  <Text style={styles.confirmar_botao}>CONFIRMAR</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
            </View>
         </Modal>

         <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisibleNovo}
          onRequestClose={this.toggleModalNovo}
          >

          <View style={styles.modalContainer}>
            <Animated.View style={[{ transform: [{ translateY: translateYNovo }] }]}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitulo}>Inserir nova carga</Text>
                <TouchableOpacity onPress={this.toggleModalNovo} activeScale={2}>
                  <MaterialCommunityIcons style={styles.modalCloseButton} name="close" />
                </TouchableOpacity>
              </View>
          
              <View style={styles.modalContent_2}>
                <Text style={styles.modalText}>Registrando a carga podemos acompanhar sua evolução no exercício</Text>
                <View style={styles.modalContent_3}>
                  <TouchableOpacity onPress={this.handleMinusPress} activeScale={2}>
                    <MaterialCommunityIcons style={styles.modalPlusMinusButton} name="minus" />
                  </TouchableOpacity>
                  <TextInput
                    style={styles.input_2}
                    keyboardType='numeric'
                    multiline={true}
                    numberOfLines={4}
                    value={valorCarga}
                    placeholder="0.0 kg"
                    onChangeText={(text) => this.setState({ valorCarga: text })} 
                  />
                  <TouchableOpacity onPress={this.handlePlusPress} activeScale={2}>
                    <MaterialCommunityIcons style={styles.modalPlusMinusButton} name="plus" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.confirmar_container}>
                <TouchableOpacity onPress={this.toggleModalNovo} activeScale={2}>
                  <Text style={styles.confirmar_botao}>CONFIRMAR</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
          
        </Modal>

  </View>
    );
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

const imagens = StyleSheet.create({
  imagem: {
    width: 350,
    height: 300,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    alignSelf: 'center',
  },
});

const container = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 75,
    width: 350,
    justifyContent: 'space-between',
  },
  container2: {
    flexDirection: 'row',
    height: 65,
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    backgroundColor: '#f7f5f5',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  
});

const descricao = StyleSheet.create({
  serie: {
    height: 35,
    padding: 7,
    width: 135,
    color: '#4d4c4c',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#f7f5f5',
    marginHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  numero: {
    height: 30,
    width: 135,
    paddingHorizontal: 7,
    color: '#5e5c5c',
    fontSize: 14,
    backgroundColor: '#f7f5f5',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginHorizontal: 10,
  },

  carga: {
    height: 30,
    padding: 7,
    width: 75,
    color: '#4d4c4c',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#f7f5f5',
    borderTopLeftRadius: 5,
  },

  numero1: {
    height: 30,
    padding: 5,
    width: 75,
    color: '#5e5c5c',
    fontSize: 14,
    backgroundColor: '#f7f5f5',
    borderBottomLeftRadius: 5,
  },

  icone1: {
    backgroundColor: '#f5a802',
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10,
    borderRadius: 3,
  },

  envolta: {
    backgroundColor: 'white',
    width: 350,
    alignSelf: 'center',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  descricao_container: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#f7f5f5',
    width: 300,
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    borderRadius: 3,
  },

  descricao_container_2: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 3,
  },

  descanso: {
    fontWeight: 'bold',
    fontSize: 15,
    padding: 10,
    height: 40,
    backgroundColor: '#f7f5f5',
    borderRadius: 3,
    color: '#4d4c4c',
  },

  descanso_tempo: {
    fontWeight: 'bold',
    fontSize: 15,
    padding: 10,
    backgroundColor: '#f7f5f5',
    alignSelf: 'flex-end',
  },

  icone2: {
    backgroundColor: '#f5a802',
    fontSize: 40,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },


  container_3: {
    width: 350,
    height: 90,
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },


  anotacao_container:{
    height: 60,
    padding: 7,
    width: 300,
    color: '#4d4c4c',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f5f5',
    justifyContent: 'space-between',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  anotacao: {
    lineHeight: 50,
    width: 135,
    color: '#4d4c4c',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 16.5,
    height: 50,
    backgroundColor: '#f7f5f5',
    borderRadius: 3,
    textAlign: 'left',
    justifyContent: 'center',
  },
    
  
  icone3: {
    backgroundColor: '#edab1c',
    fontSize: 50,
    width: 50,
    borderRadius: 12,
  },

  

});

const styles = StyleSheet.create({
  treinos: {
    width: 300,
    height: 85,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  exercicio: {
    fontSize: 20,
    lineHeight: 50,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  quadrado: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    backgroundColor: 'white',
    fontSize: 16,
    lineHeight: 45,
    textAlign: 'center',
  },
  resto: {
    flex: 1,
    backgroundColor: '#222222',
    flexDirection: 'column',
  },
  serie: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    padding: 8,
    width: 150,
    height: 30,
    lineHeight: 27,
    fontSize: 13,
    color: '#fcb103',
  },
  repeticoes: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    textAlign: 'right',
    width: 150,
    height: 36,
    lineHeight: 50,
    color: '#fcb103',
    fontSize: 13,
  },
  contagem1: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    width: 150,
    height: 32,
    lineHeight: 20,
    color: '#b0abab',
    fontSize: 19,
  },
  contagem2: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    textAlign: 'right',
    width: 150,
    height: 32,
    lineHeight: 20,
    color: '#b0abab',
    fontSize: 19,
  },

  carga: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    width: 150,
    height: 37,
    lineHeight: 20,
    textAlign: 'center',
    borderColor: 'gray',
    borderBottomLeftRadius: 12,
  },
  icone2: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    width: 150,
    lineHeight: 50,
    height: 38,
    textAlign: 'center',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: 'gray',
    fontSize: 30,
  },
  anotacoes: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    width: 150,
    textAlign: 'center',
    borderLeftWidth: 1,
    borderBottomRightRadius: 12,
    height: 37,
    lineHeight: 20,
    borderBottomWidth: 0,
    borderColor: 'gray',
    fontSize: 15,
  },
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
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 18
  },
  modalCloseButton: {
    backgroundColor: '#f5a802',
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
    margin: 15
  },

  modalContent_2: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  modalText:{
    paddingVertical: 10,  
    paddingHorizontal: 18,  
    width: '95%',
    color: '#4a4848',
  },

  input: {
    borderWidth: 1,
    borderColor: '#787575',
    borderRadius: 7,
    marginVertical: 10,
    margin: 15,
    marginBottom: 15,
    width: 350,
    textAlignVertical: 'top',
    padding: 10
  },
  confirmar_container:{
    backgroundColor: 'white',
    height: 60
  },
  confirmar_botao:{
    backgroundColor: 'black',
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 10,
    width: '85%',
    textAlign: 'center',
    borderRadius: 8
  },
  confirmar_texto:{
    color: 'white'
  },

  input_2:{
    borderWidth: 1,
    borderColor: '#787575',
    borderRadius: 7,
    margin: 8,
    marginBottom: 15,
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingHorizontal: 20,
    alignSelf: 'center',
    width: 150,
    height: 60,
    fontSize: 15,
    fontWeight: 'bold',
  },

  modalContent_3: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalPlusMinusButton: {
    backgroundColor: '#f5a802',
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
    margin: 15,
    borderRadius: 50,
    padding: 10
  },
});

AppRegistry.registerComponent('myproject', () => SwiperComponent);
