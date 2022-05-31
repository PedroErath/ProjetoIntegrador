import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { notificationManager } from '../componentes/Notificacao'
import Icon from 'react-native-vector-icons/Entypo'

import ItemDatabase from '../database/ItemDatabase'
import Item from '../models/Item'
import ItemComponente from '../componentes/ItemComponente'
import { DrawerActions } from '@react-navigation/native'

const Notificador = notificationManager

export default class Feedback extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: "",
      nota: "5",
      opiniao: "",
      lista: []
    }
    this.Listar()
  }

  componentDidMount() {
    Notificador.configurar()
    Notificador.criarCanal()
    Notificador.agendarNotificacao()
  }

  disparar = () => {
    Notificador.showNotification(
      1,
      "Muito Obrigado ;)",
      "Seu Feedback foi cadastrado com sucesso",
      {}, // data
      {} // options
    )
  }

  Listar = () => {
    const banco = new ItemDatabase();
    banco.Listar().then(
      listaCompleta => {
        this.setState({ lista: listaCompleta })
      }
    )
  }

  Cadastrar = (nome, nota, opiniao) => {
    if (nome == ''){
      alert('Insira um nome')
    }else{
    const itemNovo = new Item(nome, nota, opiniao);
    const banco = new ItemDatabase();
    banco.Inserir(itemNovo)
    this.Listar()
    this.disparar()
    }
  }

  render() {
    return (
      <ScrollView style={estilo.fundo}>
        <View style={estilo.header}>
          <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer()) }>
            <Icon name="menu" color={'white'} size={40}/>
          </TouchableOpacity>
          <Text style={estilo.titulo}>D♡CE SAB♡R</Text>
        </View>
        <View>
          <View style={estilo.container}>
            <Text style={estilo.titulo2}>Bem Vindo à Doce Sabor</Text>
            <Text style={estilo.titulo2}>Deixe seu feedback</Text>
          </View>
          <View style={[estilo.linha, estilo.container]}>
            <Text style={estilo.texto}>Nome:</Text>
            <TextInput onChangeText={(valorDigitado) => { this.setState({ nome: valorDigitado }) }} style={estilo.EntradaDados} />
          </View>
          <View style={[estilo.linha, estilo.container]}>
            <Text style={estilo.texto}>Nota:</Text>
            <View style={estilo.picker}>
              <Picker
              /* style={{height: 14}} */
              selectedValue={this.state.nota}
              onValueChange={(itemValue) => this.setState({ nota: itemValue })}>
                <Picker.Item label='1' value='1' />
                <Picker.Item label='2' value='2' />
                <Picker.Item label='3' value='3' />
                <Picker.Item label='4' value='4' />
                <Picker.Item label='5' value='5' />
              </Picker>
            </View>
          </View>
          <View style={[estilo.linha, estilo.container]}>
            <Text style={estilo.texto}>Opinião:</Text>
            <TextInput multiline={true} onChangeText={(valorDigitado) => { this.setState({ opiniao: valorDigitado }) }} style={estilo.EntradaDados2}/>
          </View>
        </View>
        <View style={estilo.container}>
          <TouchableOpacity onPress={() => this.Cadastrar(this.state.nome, this.state.nota, this.state.opiniao)} style={estilo.botao}>
            <Text style={estilo.texto}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
        <View style={estilo.container}>
          <Text style={estilo.titulo2}>FEEDBACKS</Text>
        </View>
        <View>
          {
            this.state.lista.reverse().map(
              item => (
                <ItemComponente
                  key={item.id}
                  item={item}
                  id={item.id}
                  nome={item.nome}
                  nota={item.nota}
                  opiniao={item.opiniao}
                />
              )
            )
          }
        </View>
      </ScrollView>
    )
  }
}

const estilo = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#ff0062',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  titulo2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  fundo: {
    backgroundColor: '#d80053'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3
  },
  botao: {
    width: 300,
    backgroundColor: '#3ebbfe',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 55,
    padding: 5,
    elevation: 5,
    margin: 5,
  },
  texto:{
    flex:2,
    color: 'white',
    fontSize: 17
  },
  EntradaDados:{
    flex:8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    height:40,
    marginRight: 5
  },
  EntradaDados2:{
    flex:8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    height:80,
    marginRight: 5,
    textAlignVertical: 'top'
  },
  linha:{
    flexDirection: 'row'
  },
  picker:{
    justifyContent: 'center',
    flex:8,
    marginRight:5,
    backgroundColor: 'white',
    height: 40,
    borderWidth:1,
    borderRadius:10,
  }
})