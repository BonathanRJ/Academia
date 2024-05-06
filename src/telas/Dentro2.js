import React, { Component } from 'react';
import { AppRegistry, Text, TextInput , View, Image, TouchableOpacity, Modal, Animated, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { imagens, container, styles, modal } from './css/styles_dentro';
import Swiper from 'react-native-swiper';
import ScrollPicker from "react-native-wheel-scrollview-picker";

const itemListSerie = Array.from({ length: 5 }, (_, index) => (index + 1).toString());

const itemListRepeticao = Array.from({ length: 20 }, (_, index) => (index + 1).toString());


export default class SwiperComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tempoRestante: 45,
      intervalo: null,
      iconeAtual: 'play-outline',
      modalVisivelAnotacoes: false,
      modalVisivelCarga: false,
      modalVisivelRepeticoes: false, 
      translateY: new Animated.Value(500), 
      translateYNovo: new Animated.Value(500), 
      translateYRepeticoes: new Animated.Value(500),
      anotacaoTexto: '', 
      valorCarga: '0.0',
      seriesRepeticoes: '',
      selectedItemIndexSerie: 40,
      selectedItemIndexRepeticao: 40,
      itemListSerie: this.createLoopedItemList(itemListSerie),
      itemListRepeticao: this.createLoopedItemList(itemListRepeticao),
    };
  }
  
  onPickerSelectSerie(index) {
    this.setState({ selectedItemIndexSerie: index });
  }

  onPickerSelectRepeticao(index) {
    this.setState({ selectedItemIndexRepeticao: index });
  }

  chamaModalAnotacoes = () => {
    const { modalVisivelAnotacoes } = this.state;
    this.setState({ modalVisivelAnotacoes: !modalVisivelAnotacoes }, () => {
      this.animacaoModalAnotacoes();
    });
  };

  chamaModalCarga = () => {
    const { modalVisivelCarga } = this.state;
    this.setState({ modalVisivelCarga: !modalVisivelCarga }, () => {
      this.animacaoModalCarga();
    });
  };

  chamaModalRepeticoes = () => {
    const { modalVisivelRepeticoes } = this.state;
    this.setState({ modalVisivelRepeticoes: !modalVisivelRepeticoes }, () => {
      this.animacaoModalRepeticoes();
    });
  };
  
  animacaoModalAnotacoes = () => {
    const { modalVisivelAnotacoes, translateY } = this.state;
    Animated.timing(translateY, {
      toValue: modalVisivelAnotacoes ? 0 : 500,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  animacaoModalCarga = () => {
    const { modalVisivelCarga, translateYNovo } = this.state;
    Animated.timing(translateYNovo, {
      toValue: modalVisivelCarga ? 0 : 500,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  animacaoModalRepeticoes = () => {
    const { modalVisivelRepeticoes, translateYRepeticoes } = this.state;
    Animated.timing(translateYRepeticoes, {
      toValue: modalVisivelRepeticoes ? 0 : 500,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  
  botaoMenos = () => {
    let { valorCarga } = this.state;
    let novoValor = parseFloat(valorCarga) - 1.0;
    novoValor = Math.max(0, parseFloat(novoValor.toFixed(1))); 
    this.setState({ valorCarga: novoValor.toFixed(1) });
  };
  
  botaoMais = () => {
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

  createLoopedItemList = (originalList) => {
    const repeatedList = [];
    for (let i = 0; i < 15; i++) {
      repeatedList.push(...originalList);
    }
    return repeatedList;
  };

  onPickerSelectSerie(index) {
    const { itemListSerie } = this.state;
    const originalLength = itemListSerie.length / 3;
    let selectedItemIndexSerie = index;
    if (index < originalLength || index >= 2 * originalLength) {
      selectedItemIndexSerie = index % originalLength;
    }
    this.setState({ selectedItemIndexSerie });
  }

  onPickerSelectRepeticao(index) {
    const { itemListRepeticao } = this.state;
    const originalLength = itemListRepeticao.length / 3;
    let selectedItemIndexRepeticao = index;
    if (index < originalLength || index >= 2 * originalLength) {
      selectedItemIndexRepeticao = index % originalLength;
    }
    this.setState({ selectedItemIndexRepeticao });
  }

  render() {
    const { tempoRestante, iconeAtual, modalVisivelAnotacoes, translateY, anotacaoTexto, modalVisivelCarga, translateYNovo, valorCarga, modalVisivelRepeticoes, translateYRepeticoes, seriesRepeticoes, index,  selectedItemIndexSerie, selectedItemIndexRepeticao, itemListSerie, itemListRepeticao} = this.state;

    return (
      <View style={container.container_geral}>
        <Swiper
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.active_dot} />}
        >
          <View style={styles.fundo}>
            <Image source={require('../../assets/TreinoA/legpress.jpg')} style={imagens.img_principal} />
            <View style={{ width: 350, alignSelf: 'center', height: 1, backgroundColor: '#c1c4c9' }} />
            <View style={container.container_1}>
              <Text style={styles.exercicio_titulo}>Leg Press 45°</Text>
            </View>
            <View style={container.container_1}>
              <View style={container.container_caixa}>
                <View>
                  <Text style={styles.serie_repeticoes}>Séries e Repetições</Text>
                  <Text style={styles.contagem_serie_repeticoes}>{itemListSerie[selectedItemIndexSerie]} x {itemListRepeticao[selectedItemIndexRepeticao]}</Text>
                </View>
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={this.chamaModalRepeticoes}>
                  <MaterialCommunityIcons style={styles.icone_lapis} name="counter" />
                </TouchableOpacity>
              </View>
              <View style={container.container_caixa}>
                <View>
                  <Text style={styles.carga}>Carga (kg)</Text>
                  <Text style={styles.contagem_carga}>{valorCarga} </Text>
                </View>
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={this.chamaModalCarga}>
                  <MaterialCommunityIcons style={styles.icone_lapis} name="pencil-outline" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={container.container_2}>
              <View style={container.container_descanso}>
                <Text style={styles.descanso_texto}>DESCANSO</Text>
                <View style={container.container_descanso_2}>
                  <Text style={styles.descanso_tempo}>{`00:${tempoRestante < 10 ? '0' + tempoRestante : tempoRestante}`}</Text>
                  <TouchableOpacity onPress={this.iniciarContagemRegressiva}>
                    <MaterialCommunityIcons style={styles.icone_play} name={iconeAtual} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={container.container_3}>
              <TouchableOpacity style={styles.anotacoes_container} onPress={this.chamaModalAnotacoes} >
                <MaterialCommunityIcons style={styles.icone_chat} name="chat-processing-outline" />
                <Text style={styles.anotacoes_caixa}>Anotações</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Swiper>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisivelAnotacoes}
          onRequestClose={this.chamaModalAnotacoes}
        >
          <View style={modal.container_modal}>
            <Animated.View style={[{ transform: [{ translateY }] }]}>
              <View style={modal.modal_conteudo}>
                <Text style={modal.modal_titulo}>Inserir anotações</Text>
                <TouchableOpacity onPress={this.chamaModalAnotacoes} activeScale={2}>
                  <MaterialCommunityIcons style={modal.modal_botao_fechar} name="close" />
                </TouchableOpacity>
              </View>
              <View style={modal.modal_conteudo_2}>
                <Text style={modal.modal_texto}>Utilize o campo abaixo para realizar suas anotações sobre o exercício. Elas ficarão disponíveis somente para você.</Text>
                <TextInput
                  style={modal.input}
                  multiline={true}
                  numberOfLines={4}
                  value={anotacaoTexto}
                  placeholder="Exemplo: Ajuste do banco, altura da máquina, etc."
                  onChangeText={(text) => this.setState({ anotacaoTexto: text })}
                />
              </View>
              <View style={modal.container_confirmar}>
                <TouchableOpacity onPress={this.chamaModalAnotacoes} activeScale={2}>
                  <Text style={modal.confirmar_botao}>CONFIRMAR</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisivelCarga}
          onRequestClose={this.chamaModalCarga}
        >
          <View style={modal.container_modal}>
            <Animated.View style={[{ transform: [{ translateY: translateYNovo }] }]}>
              <View style={modal.modal_conteudo}>
                <Text style={modal.modal_titulo}>Inserir nova carga</Text>
                <TouchableOpacity onPress={this.chamaModalCarga} activeScale={2}>
                  <MaterialCommunityIcons style={modal.modal_botao_fechar} name="close" />
                </TouchableOpacity>
              </View>
              <View style={modal.modal_conteudo_2}>
                <Text style={modal.modal_texto}>Registrando a carga podemos acompanhar sua evolução no exercício</Text>
                <View style={modal.modal_conteudo_3}>
                  <TouchableOpacity onPress={this.botaoMenos} activeScale={2}>
                    <MaterialCommunityIcons style={modal.modal_botao_menos_mais} name="minus" />
                  </TouchableOpacity>
                  <TextInput
                    style={modal.input_carga}
                    keyboardType='numeric'
                    multiline={true}
                    numberOfLines={4}
                    value={valorCarga}
                    placeholder="0.0 kg"
                    onChangeText={(text) => this.setState({ valorCarga: text })}
                  />
                  <TouchableOpacity onPress={this.botaoMais} activeScale={2}>
                    <MaterialCommunityIcons style={modal.modal_botao_menos_mais} name="plus" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={modal.container_confirmar}>
                <TouchableOpacity onPress={this.chamaModalCarga} activeScale={2}>
                  <Text style={modal.confirmar_botao}>CONFIRMAR</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisivelRepeticoes}
          onRequestClose={this.chamaModalRepeticoes}
        >
          <View style={modal.container_modal}>
            <Animated.View style={[{ transform: [{ translateY: translateYRepeticoes }] }]}>
              <View style={modal.modal_conteudo}>
                <Text style={modal.modal_titulo}>Inserir Séries e Repetições</Text>
                <TouchableOpacity onPress={this.chamaModalRepeticoes} activeScale={2}>
                  <MaterialCommunityIcons style={modal.modal_botao_fechar} name="close" />
                </TouchableOpacity>
              </View>
              <View style={modal.modal_conteudo_2}>
                <Text style={modal.modal_texto}>Insira o número de séries e repetições para este exercício:</Text>
                <View style={modal.modal_caixa}>  

                  <View style={modal.modal_rep_ser}>
                    <Text style={modal.modal_texto_rep_ser}>Séries</Text>
                    <View style={{ height: 100, }}>
                    <ScrollPicker
                    style={modal.input_repeticoes}
                    dataSource={itemListSerie}
                    selectedIndex={selectedItemIndexSerie}
                    renderItem={(data, index, isSelected) => {
                      return (
                        <View key={index}>
                          <Text style={{ 
                            color: isSelected ? 'black' : '#464d70',
                            fontWeight: isSelected ? 'bold' : 'normal',
                            fontSize: isSelected ? 18: 13,
                            }}>{data}</Text>
                        </View>
                      );
                    }}
                    onValueChange={(data, selectedIndex) => this.onPickerSelectSerie(selectedIndex)}
                    wrapperHeight={100}
                    wrapperBackground={'white'}
                    itemHeight={32}
                    highlightColor={'#464d70'}
                    highlightBorderWidth={2}
                    />
                    
                    </View>
                  </View> 
                  <Text style={{alignSelf: 'flex-end', height: 110, fontWeight: 'bold', color: 'black', textAlign: 'center', textAlignVertical: 'center'}}>
                      X
                  </Text>
                  <View style={modal.modal_rep_ser}>
                    <Text style={modal.modal_texto_rep_ser}>Repetições</Text>
                    <View style={{ height: 100, }}>
                    <ScrollPicker
                    style={modal.input_repeticoes}
                    dataSource={itemListRepeticao}
                    selectedIndex={selectedItemIndexRepeticao}
                    renderItem={(data, index, isSelected) => {
                      return (
                        <View key={index}>
                          <Text style={{ 
                            color: isSelected ? 'black' : '#464d70',
                            fontWeight: isSelected ? 'bold' : 'normal',
                            fontSize: isSelected ? 18: 13,
                            }}>{data}</Text>
                        </View>
                      );
                    }}
                    onValueChange={(data, selectedIndex) => this.onPickerSelectRepeticao(selectedIndex)}
                    wrapperHeight={100}
                    wrapperBackground={'white'}
                    itemHeight={32}
                    highlightColor={'#464d70'}
                    highlightBorderWidth={2}
                    />
                    
                  </View> 
                  </View>
                </View>
              </View>
              <View style={modal.container_confirmar}>
                <TouchableOpacity onPress={this.chamaModalRepeticoes} activeScale={2}>
                  <Text style={modal.confirmar_botao}>CONFIRMAR</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </Modal>
      </View>
    );
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent);