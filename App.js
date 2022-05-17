import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import ItemDatabase from './src/database/ItemDatabase'
import Item from './src/models/Item'

export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      nome: "",
      nota: 1,
      opiniao: "",
      lista: []
    }
  }


  render() {
    return(
      <View>
        
      </View>
    )
  }
}