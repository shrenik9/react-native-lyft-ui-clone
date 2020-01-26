import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import styles from './style';
import Ridedetails from 'app/components/Ridecar/index';
import Footerdetails from 'app/components/Ridefooter/index';

const Economy = props=>{
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <Ridedetails
                    carimage={require('../../../../images/car.jpg')}
                    cartype='Lyft'
                    availablepersons='4'
                    price='US $ 9.01'
                    time='8:58 AM'
                />
                <Ridedetails
                    carimage={require('../../../../images/car.jpg')}
                    cartype='Shared'
                    availablepersons='2'
                    price='US $ 7'
                    time='8:58 PM'
                />
                <Footerdetails
                    iconname1='credit-card-alt'
                    textname1='Add payment'
                    iconname2='calendar'
                    textname2='Schedule'
                    navigation={() => props.navigation.navigate('Addpayments')}
                    navigation1={() => props.navigation.navigate('Scheduleiride')}
                />

                <View style={styles.buttoncontainer}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Rideconfirm')}>
                        <Text style={styles.btntxt}>Request Shared</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
export default Economy;
