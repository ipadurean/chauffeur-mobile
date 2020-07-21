import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { connect } from "react-redux";
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const Driver = (props) => {

  const { driver } = props;
 

  return (
    <View style={styles.container}>
      <Image
        style={styles.driverPhoto}
        source={{uri: driver.photo }}
      />
      <View style={styles.group1}>
        <Text style={styles.name}>{driver.username}</Text>
        <Text>Rating {driver.rating} *</Text>
        <Text>{driver.car}</Text>
      </View>
      <View style={styles.group2}>
        <Text>Rate: ${driver.rate}/hour</Text>
        <TouchableOpacity>
          <View style={styles.bookButton}>
            <Text style={styles.bookText}> Book ride </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: '#c5ccd1', 
    borderWidth: 0.5,
  },
  group1: {
    width: 0.45 * windowWidth,
    padding: 10
  },
  group2: {
    width: 0.35 * windowWidth,
    padding: 10
  },
  bookButton: {
    borderRadius: 15,
    backgroundColor: "#2f4569",
    alignItems: "center",
    padding: 3,
    margin: 3,
    shadowColor: "#000",
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
    fontSize: 20,
    color: "white"
  },

  name: {
    fontSize: 20,
  },
  driverPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10
  }
})

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(Driver);