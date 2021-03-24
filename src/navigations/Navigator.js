import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Profile from '../screens/Profile'
import Address from '../screens/Address'
import { AppLoading } from 'expo'

const stackNavigatorOptions = {
    headerShown :false
}

const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Detail:{screen:Detail},
    Profile:{screen:Profile},
    Address:{screen:Address},
   
    
},
    {
        defaultNavigationOptions:stackNavigatorOptions
    }
)
export default createAppContainer(AppNavigator);