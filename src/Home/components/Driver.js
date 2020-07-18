import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from "react-redux";

const Driver = (props) => {

  const { driver } = props
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <Text>{driver.username}</Text>
        <Text>Rating {driver.rating} *</Text>
        <Text> ~ {driver.car} ~ </Text>
      </View>
      <View style={styles.group2}>
        <Text>Rate: ${driver.rate}/hour</Text>
        <TouchableOpacity>
          <Text style={styles.book}> Book ride </Text>
        </TouchableOpacity>
      </View>
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b0ebc0',
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: 'gray', 
    borderWidth: 1,
  },
  group1: {
    width: 250,
    padding: 20
  },
  group2: {
    width: 160,
    padding: 20
  },
  book: {
     fontSize: 20,
     color: "gray",
  }
})

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(Driver);