function mapStateToProps(state){
  return {
    drivers: state.drivers.drivers,
    loading: state.drivers.loading,
    sortType: state.home.sortType,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortBy: (type) => dispatch(sortDrivers(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriversList);