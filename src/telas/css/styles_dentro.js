import { StyleSheet } from 'react-native';


export const imagens = StyleSheet.create({
  img_principal: {
    width: 350,
    height: 300,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    alignSelf: 'center',
  },
});


export const container = StyleSheet.create({
  container_geral: {
    flex: 1,
  },
  container_1: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 75,
    width: 350,
    justifyContent: 'space-between',
  },
  container_2: {
    backgroundColor: 'white',
    width: 350,
    alignSelf: 'center',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
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
  container_caixa: {
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
  container_descanso: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#f7f5f5',
    width: 300,
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    borderRadius: 3,
  },
  container_descanso_2: {
    flexDirection: 'row',
  },
});


export const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#222222',
  },
  exercicio_titulo: {
    fontSize: 20,
    lineHeight: 50,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  serie_repeticoes: {
    height: 35,
    padding: 7,
    color: '#4d4c4c',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#f7f5f5',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  contagem_serie_repeticoes: {
    height: 30,
    paddingHorizontal: 7,
    color: '#5e5c5c',
    fontSize: 14,
    backgroundColor: '#f7f5f5',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
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
  contagem_carga: {
    height: 30,
    padding: 7,
    width: 75,
    color: '#5e5c5c',
    fontSize: 14,
    backgroundColor: '#f7f5f5',
    borderBottomLeftRadius: 5,
  },
  icone_lapis: {
    backgroundColor: '#f5a802',
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10,
    borderRadius: 3,
  },
  descanso_texto: {
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
  icone_play: {
    backgroundColor: '#f5a802',
    fontSize: 40,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  anotacoes_container: {
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
  anotacoes_caixa: {
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
  icone_chat: {
    backgroundColor: '#edab1c',
    fontSize: 50,
    width: 50,
    borderRadius: 12,
  },
  dot: {
    backgroundColor: '#808080',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  active_dot: {
    backgroundColor: '#f5a802',
    width: 10,
    height: 10,
    borderRadius: 6,
    marginHorizontal: 3,
  },
});


export const modal = StyleSheet.create({
  container_modal: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal_conteudo: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modal_titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 18
  },
  modal_botao_fechar: {
    backgroundColor: '#f5a802',
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
    margin: 15
  },
  modal_conteudo_2: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  modal_texto: {
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
  container_confirmar: {
    backgroundColor: 'white',
    height: 60
  },
  confirmar_botao: {
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
  confirmar_texto: {
    color: 'white'
  },
  input_carga: {
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
  modal_conteudo_3: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal_botao_menos_mais: {
    backgroundColor: '#f5a802',
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
    margin: 15,
    borderRadius: 50,
    padding: 10
  },
  modal_caixa:{
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 30
  },
  modal_rep_ser:{
    flexDirection: 'column',
    backgroundColor: 'white',
    textAlign: 'center',
    margin: 8,    
    width: 160,
    alignContent: 'center',
    justifyContent: 'center',
    
  },
  input_repeticoes: {
    borderColor: '#787575',
    borderRadius: 15,
    wrapperBackground: 'black',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  modal_texto_rep_ser:{
    paddingVertical: 10,
    paddingHorizontal: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  

});
