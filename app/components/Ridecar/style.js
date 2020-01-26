import { Platform } from 'react-native'
export default {

    container: {
        marginHorizontal: 16,
        backgroundColor: 'white',
        marginTop: 15
    },

    boxcontainer: {
        flexDirection: "row",
        marginHorizontal: 16,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#a537fd',
        paddingHorizontal: 10,
        paddingBottom: 10
    },

    justifycontainer: {
        justifyContent: 'center'
    },

    innercontainer: {
        flexDirection: 'row',
        marginTop: 10
    },

    subinnercontainer: {
        justifyContent: 'center',
        marginVertical: 4,
        marginLeft: 5
    },

    txt1: {
        fontSize: 12,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        color: '#a537fd'
    },

    txt: {
        fontSize: 15,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    }
}