import React, { Component } from "react";
import { fetchDrivers } from '../ducks/operations';
import { connect } from 'react-redux';
import { View, FlatList, Text, SafeAreaView, StyleSheet } from "react-native";
import Driver from '../components/Driver';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
const windowHeight = Dimensions.get('window').height;


class Home extends Component {

  componentDidMount() {
    const { query, fetchDrivers } = this.props;
    fetchDrivers(query)
  }


  
  render(){

  const { drivers, loading, sortType, navigation } = this.props;
  const sortedDrivers = sortType === "rating" ? drivers.sort((a, b) => b[sortType] - a[sortType]) : drivers.sort((a, b) => a[sortType] - b[sortType])
  

    return (
      <SafeAreaView style={styles.container}>
        <Text style={{margin: 5}}>* There are a total of {drivers.length} drivers available </Text>
          <View style={styles.list}>
            {loading ? <Text style={styles.loading}>Loading...</Text> :
            <FlatList 
              keyExtractor={(item) => item.id.toString()}
              data={sortedDrivers}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("profile", {driver: item})}>
                  <Driver key={item.id} driver={item} />
                </TouchableOpacity>
              )}
            />}
          </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    fontSize: 18
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 0.85 * windowHeight
  }
})

function mapStateToProps(state){
  return {
    drivers: state.home.drivers,
    loading: state.home.loading,
    sortType: state.home.sortType,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchDrivers: (q) => dispatch(fetchDrivers(q))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);