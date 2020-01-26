import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import styles from './style'

const Ridefooter = props=>{
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>

                <View>
                    <TouchableOpacity onPress={props.navigation}>
                        <View style={styles.viewcontainer}>
                            <View style={styles.iconcontainer}>
                                <Icon size={15} name={props.iconname1} />
                            </View>
                            <View style={styles.textcontainer}>
                                <Text style={styles.txt}>{props.textname1}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={props.navigation1}>
                        <View style={styles.viewcontainer}>
                            <View style={styles.iconcontainer}>
                                <Icon size={15} name={props.iconname2} />
                            </View>
                            <View style={styles.textcontainer}>
                                <Text style={styles.txt}>{props.textname2}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
export default Ridefooter;
