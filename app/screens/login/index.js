import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    ImageBackground
} from 'react-native'
import styles from './style'

const Login = props=>{
    return (
        <ImageBackground source={require('../../images/login.png')} style={{ width: '100%', height: '100%' }}>
            {/*#*/}
            <View style={styles.container}>

                <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#A407C1" translucent = {true}/>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Loginnumber')}>
                        <Text style={styles.btntxt}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttoncontainer1}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Loginnumber')}>
                        <Text style={[styles.btntxt, { color: 'white' }]}>Log in</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <View style={{ marginRight: 6 }}>
                        <Text style={styles.footertxt}>Ready to earn?</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={[styles.footertxt, { textDecorationLine: 'underline' }]}>Open the driver app</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ImageBackground>
    )
}
export default Login;
