import React, { Component } from "react";
// import { connect } from 'react-redux';
import { View,  Text, SafeAreaView, Image, StyleSheet, TouchableOpacity} from "react-native";


class DriverProfile extends Component {


  render(){
   const { driver } = this.props.navigation.state.params
   const { navigation } = this.props
  
    return (
      <SafeAreaView style={styles.container}>
       <View style={styles.driverCard}>
        <Text>{driver.name}</Text>
        <Image style={styles.driverPhoto} source={{uri: driver.photo }} />
        <Text> Rating {driver.rating}*</Text>
        <Text>Hourly Rate: ${driver.rate}</Text>
       </View>
       <View>
         <Text>{driver.description}</Text>
       </View>
       <View style={styles.vehicleCard}>
        <Text>Vehicle: {driver.car}</Text>
        <Image style={styles.vehiclePhoto} source={{uri: driver.car_photo}} />
       </View>
        <TouchableOpacity onPress={()=> navigation.navigate("bookingCalendar")}>
          <View style={styles.book}>
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
    height: 100
  },
  vehiclePhoto: {
    width: 360,
    height: 200
  },
  book: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#574d45",
    backgroundColor: "silver",
    padding: 10,
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
  }
})


export default DriverProfile;