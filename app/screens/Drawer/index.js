import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './style';
import Drawermenu from 'app/components/Drawermenu'

const Drawer = props=>{
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.userpiccontainer}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Userprofile')}>
                        <View style={styles.picinnercontainer}>
                            <Image style={styles.userimage} source={require('../../images/sherlock.jpg')} />
                            <View style={styles.cameracontainer}>
                                <Image source={require('../../images/photo-camera.png')} style={styles.camerapic} />
                            </View>
                        </View>
                        <View style={styles.username}>
                            <Text style={styles.usertxt}>Shrenik shah</Text>
                            <Text style={styles.usertxt2}>View profile</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Drawermenu iconname='car' titlename='Get a ride' navigation={() => props.navigation.navigate('Ride')} />
                <Drawermenu iconname='credit-card-alt' titlename='Add payment' navigation={() => props.navigation.navigate('Addpayments')} />
                <Drawermenu iconname='ticket' titlename='Ride passes' />
                <Drawermenu iconname='bell' titlename='Notifications' />
                <Drawermenu iconname='gift' titlename='Invite friends' navigation={() => props.navigation.navigate('InviteFriends')} />
                <Drawermenu iconname='history' titlename='Ride history' />
                <Drawermenu iconname='star' titlename='Promos' navigation={() => props.navigation.navigate('Promos')}/>
                <Drawermenu iconname='heart' titlename='Donate' />
                <Drawermenu iconname='question' titlename='Help' navigation={() => props.navigation.navigate('Help')} />
                <Drawermenu iconname='cog' titlename='Settings' navigation={() => props.navigation.navigate('Settings')} />

            </ScrollView>
        </View>
    );
}

export default Drawer;
