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
          <Text style={styles.book}> Book ride </Text>
        </TouchableOpacity>
      </View>
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e1c8',
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: 'gray', 
    borderWidth: 1,
  },
  group1: {
    width: 0.45 * windowWidth,
    padding: 10
  },
  group2: {
    width: 0.35 * windowWidth,
    padding: 10
  },
  book: {
     fontSize: 20,
     color: "#423d39",
     borderWidth: 1,
     borderRadius: 5,
     borderColor: "#574d45",
     backgroundColor: "silver",
     padding: 3,
     margin: 3
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