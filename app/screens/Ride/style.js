import { Dimensions } from "react-native";
var width = Dimensions.get("window").width; //full width
import { Platform } from 'react-native'
export default {

    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    mapContainer: {
        width: '100%',
        height: 270
    },

    menubuttoncontainer: {
        position: 'absolute',
        bottom: 0,
        marginLeft: 16,
        marginBottom: 16,
    },

    menucontainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10
    },

    searchBox: {
        top: 0,
        position: "absolute",
        width: width
    },

    searchBoxview: {
        marginHorizontal: 16,
        marginTop: 40
    },

    searchBoxinnerview: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#A0A0A0',
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },

    pickuplocation: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    locationtxt: {
        fontSize: 12,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto'
    },

    directionarrow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 5
    },

    droplocation: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
}