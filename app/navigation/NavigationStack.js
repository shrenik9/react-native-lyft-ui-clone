import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Login from 'app/screens/login/index';
import Loginnumber from 'app/screens/loginnumber/index';
import Homescreen from 'app/screens/homescreen/index';
import Userprofile from 'app/screens/Userprofile/index';
import Editprofile from 'app/screens/editprofile/index';
import Ride from 'app/screens/Ride/index';
import InviteFriends from 'app/screens/invitefriends/index';
import Settings from 'app/screens/Settings/index';
import Help from 'app/screens/Help/index';
import Addpayments from 'app/screens/Addpayment/index';
import Rideconfirm from 'app/screens/confirmride/index';
import Scheduleiride from 'app/screens/Scheduleride/index';
import Promos from 'app/screens/promos';
import SideMenu from 'app/screens/Drawer';



export const appDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Homescreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        Userprofile: {
            screen: Userprofile,
            navigationOptions: {
                headerShown: false,
            }
        },

        Editprofile: {
            screen: Editprofile,
            navigationOptions: {
                headerShown: false,
            }
        },

        Ride: {
            screen: Ride,
            navigationOptions: {
                headerShown: false,
            }
        },

        InviteFriends: {
            screen: InviteFriends,
            navigationOptions: {
                headerShown: false,
            }
        },

        Settings: {
            screen: Settings,
            navigationOptions: {
                headerShown: false,
            }
        },

        Help: {
            screen: Help,
            navigationOptions: {
                headerShown: false,
            }
        },

        Addpayments: {
            screen: Addpayments,
            navigationOptions: {
                headerShown: false,
            }
        },

        Rideconfirm: {
            screen: Rideconfirm,
            navigationOptions: {
                headerShown: false,
            }
        },

        Scheduleiride: {
            screen: Scheduleiride,
            navigationOptions: {
                headerShown: false,
            }
        },

        Promos: {
            screen: Promos,
            navigationOptions: {
                headerShown: false,
            }
        }
    },
    {

        headerMode: 'none',
        contentComponent: SideMenu,
    },
);
const RNApp = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                headerShown: false,
            }
        },

        Loginnumber: {
            screen: Loginnumber,
            navigationOptions: {
                headerShown: false,
            }
        },

        Homescreen: {
            screen: appDrawerNavigator,
            navigationOptions: {
                headerShown: false,
            }
        },
    },
    {
        initialRouteName: 'Login',
    },
);
export default createAppContainer(RNApp);
