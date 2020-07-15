import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Home'
    }
  },
  Register: {
     screen: Register,
     navigationOptions: {
      title: 'Register'
     }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 100 },
  }
});

export default HomeStack;