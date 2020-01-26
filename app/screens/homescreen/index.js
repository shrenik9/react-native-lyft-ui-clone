import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    TextInput
} from 'react-native';
import styles from './style'

import MapView from 'react-native-maps';
import Savelocations from 'app/components/Savelocations';

const Homescreen = props=>{
    const [modalVisible,useModalVisible] = useState(false);
    const closeDrawer =()=> {
        props.navigation.closeDrawer();
    };
    const openDrawer = ()=>{
        props.navigation.openDrawer()
    };

    const setModalVisible = visible=>{

        useModalVisible(visible);
    }

    const setModalclose = () => {
        useModalVisible(false);
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.mapContainer}>
                    <MapView
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: 23.0321,
                            longitude: 72.5252,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                    <View style={styles.menubuttoncontainer}>
                        <TouchableOpacity onPress={() => openDrawer()}>
                            <View style={styles.menucontainer}>
                                <Image source={require('../../images/menu.png')} style={{ width: 15, height: 15, }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.messagecontainer}>
                    <Text style={styles.txt1}>Good evening, Shrenik</Text>
                    <Text style={styles.txt2}>Where are you going?</Text>
                </View>

                <View style={styles.searchcontainer}>
                    <View style={styles.searchicon}>
                        <Image source={require('../../images/searcher.png')} style={{ width: 15, height: 15 }} />
                    </View>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <TouchableOpacity onPress={() => { setModalVisible(true) }}>
                            <Text style={{ fontSize: 15, fontFamily:'proximanova-regular' }}>Search destination</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Savelocations
                    name='Home'
                    icon={require('../../images/home.png')}
                />
                <Savelocations
                    name='Work'
                    icon={require('../../images/work.png')}
                />

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={setModalclose}
                >
                    <View style={styles.modalcontainer}>
                        <View style={styles.modalheader}>
                            <View style={styles.modelcancel}>
                                <TouchableOpacity onPress={setModalclose}>
                                    <Image style={{ width: 12, height: 12 }} source={require('../../images/close-button.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalheadertitle}>
                                <View>
                                    <Text style={styles.titletxt}>Trip</Text>
                                </View>
                            </View>
                            <View style={styles.donecontainer}>
                                <TouchableOpacity>
                                    <Text style={styles.donetxt}>Done</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.searchbox}>
                            <View>
                                <View style={styles.modalsearchcontainer}>
                                    <View style={styles.position}>
                                        <Text style={[styles.positiontxt, { color: '#a537fd' }]}>Start</Text>
                                    </View>
                                    <View style={styles.startlocation}>
                                        <TextInput placeholder='Current location' placeholderTextColor='#19b5fe' style={{ fontSize: 15 }}></TextInput>
                                    </View>
                                </View>
                            </View>

                            <View>
                                <View style={styles.modalsearchcontainer}>
                                    <View style={styles.position}>
                                        <Text style={[styles.positiontxt, { color: '#EC38FC' }]}>End</Text>
                                    </View>
                                    <View style={styles.endlocation}>
                                        <TextInput placeholder='Search destination' placeholderTextColor='#A0A0A0' style={{ fontSize: 15 }}></TextInput>
                                    </View>
                                    <View style={styles.addbutton}>
                                        <TouchableOpacity>
                                            <Image style={{ width: 30, height: 30 }} source={require('../../images/add.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Savelocations
                            name='Home'
                            icon={require('../../images/home.png')}
                        />
                        <Savelocations
                            name='Work'
                            icon={require('../../images/work.png')}
                        />
                        <Savelocations
                            name='Set on map'
                            icon={require('../../images/locationpin.png')}
                        />
                    </View>
                </Modal>
            </ScrollView>
        </View>
    );
}


export default Homescreen;
