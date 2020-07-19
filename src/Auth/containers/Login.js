import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Button, View, TextInput } from 'react-native';
import { loginAction } from '../ducks/operations';



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

  handleSubmit = () => {
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
        <View>
            <TextInput
              style={styles.input}
              placeholder= "username"
              onChangeText={(text) => this.setState({username: text})}
            />
            <TextInput
              style={styles.input}
              type="password"
              placeholder="password"
              onChangeText={(text) => this.setState({password: text})}
              />
            <Button title='Login' onPress={this.handleSubmit} />
            <Button title='Continue as Guest' onPress={() => navigation.navigate("drivers")} />
            <Button title='Register' onPress={() => navigation.navigate("Register")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

function mapDispatchToProps(dispatch){
  return { 
    login: (loginParams) => dispatch(loginAction(loginParams))
  }
}

export default connect(null, mapDispatchToProps)(Login)