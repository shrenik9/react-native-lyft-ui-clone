import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './style'
import Icon from "react-native-vector-icons/FontAwesome";

const Drawermenu = props =>{
    return (
        <TouchableOpacity onPress={props.navigation}>
            <View style={styles.container}>
                <View style={styles.iconcontainer}>
                    <Icon size={17} name={props.iconname} />
                </View>
                <View style={styles.titlecontainer}>
                    <Text style={styles.titletxt}>{props.titlename}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Drawermenu;
