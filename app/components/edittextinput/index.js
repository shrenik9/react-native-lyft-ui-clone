import React from 'react';
import {
    View,
    TextInput,
} from 'react-native';
import styles from './style'
import Icon from "react-native-vector-icons/FontAwesome";


const Edittextinput = props =>{
    return (
        <View style={styles.textcontainer}>
            <View style={styles.iconcontainer}>
                <Icon size={20} name={props.iconname} />
            </View>
            <View style={styles.textinputname}>
                <TextInput style={styles.textinputtxt} placeholder={props.placeholder} placeholderTextColor='#A0A0A0'>{props.placeholdertxt}</TextInput>
            </View>
        </View>
    );
}
export default Edittextinput;
