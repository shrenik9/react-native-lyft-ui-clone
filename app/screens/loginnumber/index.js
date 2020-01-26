import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform, StatusBar
} from 'react-native'
import styles from './style'

const Loginnumber = props=>{
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
            <View style={styles.arrowcontainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                    <Image style={styles.leftarrow} source={require('../../images/left-arrow.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.txtconatiner}>
                <Text style={styles.txt}>What's your number?</Text>
                <Text>We'll text a code to verify your phone</Text>
            </View>

            <View style={styles.numbercontainer}>
                <View style={styles.flagcontainer}>
                    <Image source={require('../../images/india-flag.jpg')} style={{ width: 20, height: 15 }} />
                </View>
                <View style={styles.downarrow}>
                    <Image source={require('../../images/down-arrow.png')} style={{ width: 10, height: 10 }} />
                </View>
                <View style={styles.countrycode}>
                    <Text style={styles.countrycodetxt}>+91</Text>
                </View>
                <View style={styles.Numberinput}>
                    <TouchableOpacity>
                        <TextInput placeholder='0123456789' style={styles.numbertxt}></TextInput>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footercontainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Homescreen')}>
                    <Text style={styles.footertxt}>Have an account and a new number?</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Loginnumber;
