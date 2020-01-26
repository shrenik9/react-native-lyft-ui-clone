import React from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './style'
import Icon from "react-native-vector-icons/FontAwesome";

const Userdetails = props=>{
    return (
        <View style={styles.container}>
            <View style={styles.iconcontainer}>
                <Icon name={props.iconname} size={17} />
            </View>
            <View style={styles.textcontainer}>
                <Text style={styles.texttxt}>{props.text}</Text>
            </View>
        </View>
    );
}
export default Userdetails;
