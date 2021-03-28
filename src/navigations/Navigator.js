import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Menu from '../screens/Menu'
import Address from '../screens/Address'
import Register from '../screens/Register'
import { AppLoading } from 'expo'

const stackNavigatorOptions = {
    headerShown :false
}

const AppNavigator = createStackNavigator({
    Register:{screen:Register},
    Home:{screen:Home},
    Detail:{screen:Detail},
    Menu:{screen:Menu},
    Address:{screen:Address},
   
    
},
    {
        defaultNavigationOptions:stackNavigatorOptions
    }
)
export default createAppContainer(AppNavigator);