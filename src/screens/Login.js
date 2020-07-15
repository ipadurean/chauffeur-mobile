import React, { Component } from "react";
// import { connect } from "react-redux";
import { StyleSheet, Button, View, TextInput } from 'react-native';



class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state)
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.login({username: 'Guest', password: 'guestpass'})
  }

  render() {
  const { navigation } = this.props
    return (
      <View style={styles.container}>
        <View onSubmit={this.handleSubmit}>
            <TextInput
              style={styles.input}
              id="username"
              placeholder= "username"
              onChange={this.handleChange}
            />
            <TextInput
              style={styles.input}
              id="password"
              type="password"
              placeholder="password"
              onChange={this.handleChange}
              />
            <Button title='Login' />
            <Button title='Continue as Guest' />
            <Button title='Register' onPress={() => navigation.navigate("Register")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0ebc0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray', 
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 14,
    borderRadius: 5,
    padding: 4
  },

});

// function mapDispatchToProps(dispatch){
//   return { 
//     login: (loginParams) => dispatch(loginAction(loginParams))
//   }
// }

export default Login