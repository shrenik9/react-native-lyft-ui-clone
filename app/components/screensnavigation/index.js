import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../../screens/login/index';
import Loginnumber from '../../screens/loginnumber/index';
import Homescreen from '../../screens/homescreen/index';
import Userprofile from '../../screens/Userprofile/index';
import Editprofile from '../../screens/editprofile/index';
import Ride from '../../screens/Ride/index';
import InviteFriends from '../../screens/invitefriends/index';
import Settings from '../../screens/Settings/index';
import Help from '../../screens/Help/index';
import Addpayments from '../../screens/Addpayment/index';
import Rideconfirm from '../../screens/confirmride/index';
import Scheduleiride from '../../screens/Scheduleride/index';
import Promos from '../../screens/promos/index';

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },

    Loginnumber: {
        screen: Loginnumber,
        navigationOptions: {
            header: null,
        }
    },

    Homescreen: {
        screen: Homescreen,
        navigationOptions: {
            header: null,
        }
    },

    Userprofile: {
        screen: Userprofile,
        navigationOptions: {
            header: null,
        }
    },

    Editprofile: {
        screen: Editprofile,
        navigationOptions: {
            header: null,
        }
    },

    Ride: {
        screen: Ride,
        navigationOptions: {
            header: null,
        }
    },

    InviteFriends: {
        screen: InviteFriends,
        navigationOptions: {
            header: null,
        }
    },

    Settings: {
        screen: Settings,
        navigationOptions: {
            header: null,
        }
    },

    Help: {
        screen: Help,
        navigationOptions: {
            header: null,
        }
    },

    Addpayments: {
        screen: Addpayments,
        navigationOptions: {
            header: null,
        }
    },

    Rideconfirm: {
        screen: Rideconfirm,
        navigationOptions: {
            header: null,
        }
    },

    Scheduleiride: {
        screen: Scheduleiride,
        navigationOptions: {
            header: null,
        }
    },

    Promos: {
        screen: Promos,
        navigationOptions: {
            header: null,
        }
    }
})

export default createAppContainer(AppNavigator);