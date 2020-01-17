import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no GitHub'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#e6e4e3',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#2f4650',
            },
        }
    })
)

export default Routes