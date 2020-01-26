import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './style'
import Icon from "react-native-vector-icons/FontAwesome";

const Ridecar = props=>{
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.boxcontainer}>
                    <View style={styles.justifycontainer}>
                        <View style={styles.innercontainer}>
                            <View style={styles.justifycontainer}>
                                <Image style={{ width: 40, height: 30 }} source={props.carimage} />
                            </View>
                            <View style={styles.subinnercontainer}>
                                <View>
                                    <Text style={[styles.txt, { fontWeight: 'bold' }]}>{props.cartype}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ justifyContent: 'center', marginRight: 5 }}>
                                        <Icon size={10} name='user' color='#A0A0A0' />
                                    </View>
                                    <View style={styles.justifycontainer}>
                                        <Text style={[styles.txt1, { color: '#A0A0A0' }]}>{props.availablepersons}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', marginTop: 9 }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.txt}>{props.price}</Text>
                            <Text style={[styles.txt1, { textAlign: 'right' }]}>{props.time}</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        </View>
    );
}

export default Ridecar;
