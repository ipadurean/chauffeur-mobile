import React, { Component } from 'react';
import { View,  Text, SafeAreaView, Button, StyleSheet } from "react-native";
import Calendar from '../../utils/calendar';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

class BookingCalendar extends Component {

  constructor() {
    super()
    this.state = {
      selectedMonth: new Date().getMonth(),
    }
  }

  monthPrev = () => {
    this.state.selectedMonth &&
      this.setState(prevState => ({
        selectedMonth: prevState.selectedMonth - 1,
      }));
  }

  monthNext = () => {
      this.setState(prevState => ({
        selectedMonth: prevState.selectedMonth + 1,
      }))
  }

  getMonthYear = () => {
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let date = new Date();
      date.setMonth(this.state.selectedMonth);
      return months[this.state.selectedMonth % 12] + " " + date.getFullYear()
  }

  render() {
    

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.calendarBox}>
          <Text style={{margin: 10}}>Select date and time: </Text>
            <View style={styles.headerTop}>
              <Button title='prev' onPress={this.monthPrev} />
                <Text style={styles.month}>{this.getMonthYear()}</Text>
              <Button title='next' onPress={this.monthNext} />
            </View>
            <View style={styles.week}>
              <Text style={styles.day}>Sun</Text>
              <Text style={styles.day}>Mon</Text>
              <Text style={styles.day}>Tue</Text>
              <Text style={styles.day}>Wed</Text>
              <Text style={styles.day}>Thu</Text>
              <Text style={styles.day}>Fri</Text>
              <Text style={styles.day}>Sat</Text>
            </View>
          <View style={styles.calendarBody}>
            {Calendar.createMonth(this.state.selectedMonth)}
          </View>
        </View>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  
  },
  calendarBox: {
      width: 0.9 * windowWidth,
      height: 300
  },
  calendarBody: {
     flexWrap: "wrap",
     backgroundColor: "white",
     padding: 5,
     flexDirection: "row",
     borderWidth: 1,
     borderColor: "#e6e8ed",
     borderBottomLeftRadius: 10,
     borderBottomRightRadius: 10
  },

  month: {
    fontSize: 18,
    fontWeight: "bold"
  },

  week: {
    flexDirection: "row",
    alignItems: "center",
    width: 0.9 * windowWidth,
    backgroundColor: "#6f8ca1",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  day: {
    fontSize: 16,
    width: "14.285%",
    color: "white",
    fontWeight: "bold",
    padding: 8
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 40,
    alignItems: "center",

  }
})

export default BookingCalendar;