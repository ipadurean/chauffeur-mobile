import React, { Component } from "react";
// import { connect } from 'react-redux';
import { View,  Text, SafeAreaView, Image, StyleSheet, TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


class DriverProfile extends Component {


  render(){
   const { driver } = this.props.navigation.state.params
   const { navigation } = this.props
  
    return (
      <SafeAreaView style={styles.container}>
       <View style={styles.driverCard}>
        <Text style={styles.driverName}>{driver.name}</Text>
        <Image style={styles.driverPhoto} source={{uri: driver.photo }} />
        <Text> Rating {driver.rating}<MaterialIcons name="star" size={16} /></Text>
        <Text style={styles.rate}>Hourly Rate: ${driver.rate}</Text>
       </View>
       <View>
         <Text>{driver.description}</Text>
       </View>
       <View style={styles.vehicleCard}>
        <Text>Vehicle: {driver.car}</Text>
        <Image style={styles.vehiclePhoto} source={{uri: driver.car_photo}} />
       </View>
        <TouchableOpacity
          style={styles.book}
          onPress={()=> navigation.navigate("bookingCalendar")}>
          <View>
            <Text style={styles.bookText}>Book ride with this chauffeur </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center"
  },

  driverPhoto: {
    borderRadius: 50,
    width: 100,
    height: 100,
    margin: 10
  },

  driverName: {
    fontSize: 22,
    color: "#374852",
    fontWeight: "bold"
  },

  vehiclePhoto: {
    width: 360,
    height: 200,
    borderRadius: 7
  },

  book: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: "#2f4569",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    },

  bookText: {
   fontSize: 22,
   color: "white",
  },

  driverCard: {
   marginBottom: 20
  },

  vehicleCard: {
   marginTop: 30
  },

  rate: {
    fontSize: 16,
    color: "#3f6e8a"
  }
})


export default DriverProfile;