import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class ItemComponente extends Component {
    render() {
        return(
            <View style={estilo.container}>
                <View style={estilo.alinhamento}>
                    <Text style={estilo.texto}>{this.props.nome}</Text>
                    <Text style={estilo.texto}>{this.props.nota} ⭐</Text>
                </View>
                <Text style={estilo.texto2}>{this.props.opiniao}</Text>
            </View>       
        )
    }
}

const estilo = StyleSheet.create({
    container:{
        margin: 4,
        padding: 10,
        backgroundColor: '#ff0062',
        borderRadius: 10
    },
    alinhamento:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    texto:{
        color: 'white',
        fontSize: 15
    },
    texto2:{
        color: 'white'
    }
})