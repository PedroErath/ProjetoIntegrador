import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import ItemDatabase from './src/database/ItemDatabase'
import Item from './src/models/Item'
import ItemComponente from './src/componentes/ItemComponente'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: "",
      nota: "",
      opiniao: "",
      lista: []
    }
    this.Listar()
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
    const itemNovo = new Item(nome, nota, opiniao);
    const banco = new ItemDatabase();
    banco.Inserir(itemNovo)
    this.Listar(r)
  }

  Remover = (id) => {
    const banco = new ItemDatabase();
    banco.Remover(id)
    this.Listar()
  }

  render() {
    return (
      <ScrollView style={estilo.fundo}>
        <View style={estilo.header}>
          <Text style={estilo.titulo}>D♡CE SAB♡R</Text>
        </View>
        <View>
          <View style={estilo.container}>
            <Text style={estilo.titulo2}>Bem Vindo à Doce Sabor</Text>
            <Text style={estilo.titulo2}>Deixe seu feedback</Text>
          </View>
          <TextInput onChangeText={(valorDigitado) => { this.setState({ nome: valorDigitado }) }} placeholder='Digite seu Nome' />
          <Picker
            selectedValue={this.state.nota}
            onValueChange={(itemValue) => this.setState({ nota: itemValue })}>
            <Picker.Item label='1' value='1' />
            <Picker.Item label='2' value='2' />
            <Picker.Item label='3' value='3' />
            <Picker.Item label='4' value='4' />
            <Picker.Item label='5' value='5' />
          </Picker>
          <TextInput onChangeText={(valorDigitado) => { this.setState({ opiniao: valorDigitado }) }} placeholder='Deixe sua Opinião' />
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
            this.state.lista.map(
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
    alignItems: 'center',
    justifyContent: 'center',
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
    color: 'white'
  }
})