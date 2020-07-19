import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Auth/containers/Login';
import React from 'react';
import Header from '../shared/header';
import Register from '../Auth/containers/Register';
import Home from '../Home/containers/Home';
import DriverProfile from '../Home/containers/DriverProfile';
import BookingCalendar from '../Booking/containers/BookingCalendar';

const screens = {
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Home' navigation={navigation} />
      }
    }
  },
  Register: {
     screen: Register,
     navigationOptions: {
      title: 'Home'
     }
  },

  drivers: {
    screen: Home,
    navigationOptions: {
      title: 'Drivers'
    }
  },

  profile: {
    screen: DriverProfile,
    navigationOptions: {
      title: 'Profile'
    }
  },

  bookingCalendar: {
    screen: BookingCalendar,
    navigationOptions: {
      title: 'Boooking'
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