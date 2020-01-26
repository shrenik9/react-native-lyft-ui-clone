import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Platform
} from 'react-native';
import styles from './style'
import Icon from "react-native-vector-icons/FontAwesome";

const Addpayments = props=>{
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerimagecontainer}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Ride')}>
              <Image style={{ width: 15, height: 15 }} source={require('../../images/left-arrow.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.titlecontainer}>
            <View>
              <Text style={styles.titletxt}>Add payment</Text>
            </View>
          </View>
          <View style={styles.toprighttxt}>
            <TouchableOpacity>
              <Text style={[styles.titletxt, { color: '#19b5fe' }]}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.textinputcontainer, { borderBottomColor: '#A0A0A0', borderBottomWidth: 0.5 }]}>
          <View style={styles.iconcontainer}>
            <Icon size={20} name='credit-card' />
          </View>
          <View style={styles.firsttextinput}>
            <TextInput placeholder='Credit card number' placeholderTextColor='#A0A0A0' style={{ fontSize: 15 }} />
          </View>
          <View style={[styles.iconcontainer, { alignItems: 'flex-end' }]}>
            <TouchableOpacity>
              <Icon size={17} name='camera' />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textinputcontainer}>
          <View style={styles.textinput1}>
            <TextInput placeholder='MM/YY' placeholderTextColor='#A0A0A0' style={{ fontSize: 15 }}></TextInput>
          </View>
          <View style={styles.textinput2}>
            <TextInput placeholder='CVV' placeholderTextColor='#A0A0A0' style={{ fontSize: 15 }}></TextInput>
          </View>
          <View style={styles.flagcontainer}>
            <View style={styles.flag}>
              <Image source={require('../../images/india-flag.jpg')} style={{ width: 20, height: 15 }} />
            </View>
            <View style={styles.arrowdown}>
              <Image source={require('../../images/down-arrow.png')} style={{ width: 10, height: 10 }} />
            </View>
          </View>
        </View>

        <View style={styles.paycontainer}>
          <Text style={styles.paytxt}>Or pay with</Text>
        </View>

        <View style={styles.buttoncontainer}>
          <View style={[styles.button, { paddingHorizontal: 40 }]}>
            <TouchableOpacity>
              <Image source={require('../../images/gpay.png')} style={{ width: 40, height: 25 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Image source={require('../../images/paypal.png')} style={{ width: 80, height: 20 }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footercontainer}>
          <View style={styles.footerview}>
            <Icon size={10} name='lock' style={{ marginTop: 4 }} />
            <Text style={styles.footertxt}> Your payment info will be stored securely</Text>
          </View>
        </View>

      </View>
  );
}
export default Addpayments;
