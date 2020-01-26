import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    Dimensions
} from 'react-native';
import styles from './style'
import Carousel from 'react-native-snap-carousel';
import Invite from 'app/components/invitepage/index';
const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
const InviteFriends = props=>{
    const openDrawer = ()=> {
        props.navigation.openDrawer()
    };
    const _renderItem =({item, index}) =>{
        return (
            <View>
                <Invite
                    Adimage={require('../../images/invitefriends.png')}
                    maintxt='Invite Passengers'
                    description='Invite your friends to ride with Lyft so they can get going now!'
                    btn1='Send text'
                    btn2='Send email'
                />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerimagecontainer}>
                    <TouchableOpacity onPress={() => openDrawer()}>
                        <Image style={{ width: 15, height: 15 }} source={require('../../images/menu.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.titlecontainer}>
                    <View>
                        <Text style={styles.titletxt}>Invite friends</Text>
                    </View>
                </View>
                <View style={styles.toprighttxt}>
                    <TouchableOpacity>
                        <Image style={{ width: 20, height: 20 }} source={require('../../images/share.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.codecontainer}>
                <Text style={styles.codetxt}>Your code:</Text>
                <Text style={styles.titletxt}> SHERLOCK221</Text>
            </View>

            <View style={{ backgroundColor: 'white' }}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={[
                        {
                            title: 'Beautiful and dramatic Antelope Canyon',
                            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                            illustration: 'https://i.imgur.com/UYiroysl.jpg'
                        },
                        {
                            title: 'Earlier this morning, NYC',
                            subtitle: 'Lorem ipsum dolor sit amet',
                            illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
                        }
                    ]}
                    renderItem={_renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}
                />
                {/*<Carousel
                    height={350}
                    delay={20000}
                    indicatorAtBottom={true}
                    indicatorSize={50}
                    indicatorText="."
                    inactiveIndicatorText='.'
                    indicatorColor="black"
                    indicatorSpace={10}
                >

                </Carousel>*/}
            </View>

            <View style={styles.footercontainer}>
                <View style={styles.footerinnercontainer}>
                    <Text style={styles.messagetxt}>Enable contacts and refer friends to be{'\n'}a part of the Lyft experience</Text>
                    <View style={styles.buttoncontainer}>
                        <TouchableOpacity>
                            <Text style={styles.btntxt}>Allow</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    );
}
export default InviteFriends;
