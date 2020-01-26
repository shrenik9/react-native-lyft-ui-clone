import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './style'
import Userdetails from 'app/components/userprofile';

const Userprofile = props=>{
    const openDrawer = ()=> {
        props.navigation.openDrawer()
    };
    return (
        <View style={styles.container}>
            <ImageBackground style={{ width: '100%', height: 200 }} source={require('../../images/userbackground.png')} >
                <View style={styles.headercontainer}>
                    <View style={styles.header}>
                        <View>
                            <TouchableOpacity onPress={() => openDrawer()}>
                                <Image source={require('../../images/menu.png')} style={{ width: 20, height: 20, tintColor: 'white' }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Editprofile')}>
                                <Text style={styles.headertxt}>EDIT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>

            <View style={styles.usernamecontainer}>
                <Text style={styles.username}>Shrenik shah</Text>
            </View>

            <View style={styles.joindatecontainer}>
                <Text style={styles.datetxt}>JOINED DECEMBER 2017</Text>
            </View>

            <View style={{ marginTop: 10 }}>
                <Userdetails iconname='home' text='From the best city ever' />
                <Userdetails iconname='music' text='Favorite music is whatever matches my mood' />
                <Userdetails iconname='user' text='I am going places' />
            </View>

        </View>
    );
}

export default Userprofile;
