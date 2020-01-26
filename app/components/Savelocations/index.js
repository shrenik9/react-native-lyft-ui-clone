import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './style'


const Savelocations = props =>{
    return (
        <TouchableOpacity>
            <View style={styles.locationcontainer}>
                <View style={styles.locationimage}>
                    <Image source={props.icon} style={styles.image} />
                </View>
                <View style={styles.locationname}>
                    <Text style={styles.locationtxt}>{props.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Savelocations;
