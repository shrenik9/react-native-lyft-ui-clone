import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style'

const Invitepage = props =>{
    return (
        <View>
            <View style={styles.imagecontainer}>
                <Image source={props.Adimage} style={{ width: 120, height: 120 }} />
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.titletxt}>{props.maintxt}</Text>
                <Text style={styles.descriptiontxt}>{props.description}</Text>
            </View>
            <View style={styles.buttoncontainer}>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.buttontxt}>{props.btn1}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.buttontxt}>{props.btn2}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Invitepage;
