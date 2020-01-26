import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style'
import Textinput from 'app/components/edittextinput'

const Editprofile = props=> {
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerimagecontainer}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Userprofile')}>
                        <Image style={{width: 12, height: 12}} source={require('../../images/close-button.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.titlecontainer}>
                    <View>
                        <Text style={styles.titletxt}>Edit profile</Text>
                    </View>
                </View>
                <View style={styles.toprighttxt}>
                    <TouchableOpacity>
                        <Text style={styles.titletxt}>DONE</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Usercontainer}>
                <View style={styles.userimagecontainer}>
                    <Image style={styles.userimage} source={require('../../images/sherlock.jpg')}/>
                </View>
                <View style={styles.usernamecontainer}>
                    <Text style={styles.usernametxt}>Sherlock Holmes</Text>
                </View>
            </View>

            <Textinput iconname='user' placeholdertxt='Sherlock'/>
            <Textinput placeholdertxt='Holmes'/>
            <Textinput iconname='home' placeholder='Hometown'/>
            <Textinput iconname='music' placeholder='Favorite music'/>
            <Textinput iconname='star' placeholder='Aboutme'/>

            <View style={styles.footer}>
                <Text style={styles.footertxt}>Your profile can only be seen by passengers{'\n'}and drivers that you
                    ride with</Text>
            </View>
        </View>
    );
}

export default Editprofile;
