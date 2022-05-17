import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class ItemComponente extends Component {
    render() {
        return(
            <View>
                <View>
                    <Text>{this.props.nome}</Text>
                    <Text>{this.props.nota}</Text>
                </View>
                <Text>{this.props.opiniao}</Text>
            </View>       
        )
    }
}