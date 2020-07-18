import React, { Component } from "react";
import { fetchDrivers } from '../ducks/operations';
import { connect } from 'react-redux';
import { View, FlatList } from "react-native";
import Driver from '../components/Driver';


class Home extends Component {

  componentDidMount() {
    const { query, fetchDrivers } = this.props;
    fetchDrivers(query)
  }


  
  render(){

  const { drivers, loading, sortType } = this.props;
  const sortedDrivers = sortType === "rating" ? drivers.sort((a, b) => b[sortType] - a[sortType]) : drivers.sort((a, b) => a[sortType] - b[sortType])
  

    return (
      <View style={{flex: 1}}>
        <FlatList 
          keyExtractor={(item) => item.id.toString()}
          data={sortedDrivers}
          renderItem={({ item }) => (
            <Driver key={item.id} driver={item} />
          )}
        />
      </View>
    )
  }
}

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