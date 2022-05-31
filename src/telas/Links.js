import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { DrawerActions } from '@react-navigation/native'

export default class App extends Component {

    render() {
        return (
            <View style={estilo.fundo}>
                <View style={estilo.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                        <Icon name="menu" color={'white'} size={40} />
                    </TouchableOpacity>
                    <Text style={estilo.titulo}>D♡CE SAB♡R</Text>
                </View>
                <View>
                    <View style={estilo.container}>
                        <Text style={estilo.titulo2}>PEÇA JÁ O SEU</Text>
                        <Text style={estilo.titulo3}>No momento a Doce Sabor aceita pedidos apenas pelas redes sociais, então entre em contato conosco e peça já o seu. Lembrando que temos tele-entrega para determinadas regiões.</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/Doce-Sabor-SCS-103555431589021/')} style={estilo.link}>
                        <Image source={{ uri: 'https://logopng.com.br/logos/facebook-13.png' }} style={estilo.imagem} />
                        <Text style={estilo.texto}>FACEBOOK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/doce.saborscs/')} style={estilo.link}>
                        <Image source={{ uri: 'https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente2.png?resize=696%2C696&ssl=1' }} style={estilo.imagem} />
                        <Text style={estilo.texto}>INSTAGRAM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/5551998593383')} style={estilo.link}>
                        <Image source={{ uri: 'https://logospng.org/download/whatsapp/logo-whatsapp-verde-icone-ios-android-1024.png' }} style={estilo.imagem} />
                        <Text style={estilo.texto}>WHATSAPP</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }, titulo3: {
        padding: 15,
        fontSize: 15,
        color: 'white'
    },
    fundo: {
        flex: 1,
        backgroundColor: '#d80053'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    texto: {
        flex: 2,
        color: 'white',
        fontSize: 17
    },
    imagem: {
        height: 100,
        width: 100,
        margin: 15
    },
    link: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})