import React, { Component } from "react";
import { StyleSheet, Button, View, TextInput } from 'react-native';

class Register extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      phoneNumber: "",
      password: "",
      confirmPassword: ""
    };
  }

  // validateForm = () => {
  //   return (
  //     this.state.firstName.length > 0 &&
  //     this.state.lastName.length > 0 &&
  //     this.state.email.length > 0 &&
  //     this.state.username.length > 0 &&
  //     this.state.phoneNumber.length > 0 &&
  //     this.state.password.length > 0 &&
  //     this.state.password === this.state.confirmPassword
  //   );
  // }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.registerUser({
  //     first_name: this.state.firstName,
  //     last_name: this.state.lastName,
  //     username: this.state.username,
  //     email: this.state.email,
  //     password: this.state.password,
  //     phone_number: this.state.phoneNumber
  //   }, this.props.history)
  // }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} id="firstName" type="text" placeholder="first name" />
        <TextInput style={styles.input} id="lastName" type="text" placeholder="last name" />
        <TextInput style={styles.input} id="email" type="email" placeholder="email" />
        <TextInput style={styles.input} id="username" type="text" placeholder="username" />
        <TextInput style={styles.input} id="phoneNumber" type="text" placeholder="phone number" />
        <TextInput style={styles.input} id="password" type="password" placeholder="password" /> 
        <TextInput style={styles.input} id="confirmPassword" type="password" placeholder="confirm pasword" />
        <Button title='Register' />
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

// function mapDispatchToProps(dispatch) {
//   return {
//     registerUser: (registerParams, history) => dispatch(register(registerParams, history))
//   }
// }

// function mapStateToProps(state) {
//   return {
//     creating: state.auth.creating,
//     created: state.auth.created
//   }
// }

export default Register;