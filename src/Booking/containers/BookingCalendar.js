import React, { Component } from 'react';
import { View,  Text, SafeAreaView, Button, StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
import { MaterialIcons } from '@expo/vector-icons';
import { selectDay } from '../ducks/actions';
import { connect } from "react-redux";

class BookingCalendar extends Component {


  constructor(props) {
    super()
    this.state = {
      monthSelected: new Date(props.daySelected || Date.now()).getMonth(),
    }
  }

  monthPrev = () => {
    this.state.monthSelected &&
      this.setState(prevState => ({
        monthSelected: prevState.monthSelected - 1,
        })
      );
    this.props.setDay(null)
  }

  monthNext = () => {
    this.setState(prevState => ({
      monthSelected: prevState.monthSelected + 1,
      })
    )
    this.props.setDay(null)
  }

  getMonthYear = () => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    let date = new Date();
    date.setMonth(this.state.monthSelected);
    return months[this.state.monthSelected % 12] + " " + date.getFullYear()
  }

  createMonth = () => {
    const { monthSelected } = this.state;
    const { daySelected } = this.props
    const date = new Date(new Date().getFullYear(), monthSelected, 1);
    const select = new Date(new Date().getFullYear(), monthSelected, 1);
      select.setTime(daySelected);
    const daysArr = [];
    const monthSize = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
   
    let day = 1;
    for (let i = 0; i < date.getDay(); i++) {
      daysArr.push(
        <View style={styles.disabled} key={i + 100} pointerEvents="none">
          <View>
            <Text style={styles.date}></Text>
          </View>
        </View>
      )
    }
    while (day <= monthSize) {
      daySelected && day === select.getDate() ?
        daysArr.push(
          <View key={day} style={styles.dateBox}>
            <View>
              <Text style={styles.date}>{day}</Text>
            </View>
          </View>
        ) :
        day === new Date().getDate() && new Date().getMonth() === date.getMonth() ?
          daysArr.push(
            <View key={day} style={styles.dateBox}>
              <View style={styles.today}>
                <Text style={styles.date}>{day}</Text>
              </View>
            </View>) :
          date.setDate(day) < new Date().getTime() ?
            daysArr.push(
              <View key={day} style={styles.disabled} pointerEvents="none">
                <View>
                  <Text style={styles.date}>{day}</Text>
                </View>
              </View>
            ) :
            daysArr.push(
              <View key={day} style={styles.dateBox}>
                <View>
                  <Text style={styles.date}>{day}</Text>
                </View>
              </View>
            )
      day++
    }
    return daysArr;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.calendarBox}>
          <Text style={{margin: 10}}>Select date and time: </Text>
          <View style={styles.headerTop}>
            <MaterialIcons name="arrow-back" size={34} onPress={this.monthPrev} />
              <Text style={styles.month}>{this.getMonthYear()}</Text>
            <MaterialIcons name="arrow-forward" size={34} onPress={this.monthNext} />
          </View>
          <View style={styles.week}>
            <View style={styles.day}><Text style={styles.dayText}>Sun</Text></View>
            <View style={styles.day}><Text style={styles.dayText}>Mon</Text></View>
            <View style={styles.day}><Text style={styles.dayText}>Tue</Text></View>
            <View style={styles.day}><Text style={styles.dayText}>Wed</Text></View>
            <View style={styles.day}><Text style={styles.dayText}>Thu</Text></View>
            <View style={styles.day}><Text style={styles.dayText}>Fri</Text></View>
            <View style={styles.day}><Text style={styles.dayText}>Sat</Text></View>
          </View>
          <View style={styles.calendarBody}>
            {this.createMonth()}
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
     height: 250,
     flexDirection: "row",
     borderWidth: 1,
     borderColor: "#e6e8ed",
     borderBottomLeftRadius: 10,
     borderBottomRightRadius: 10
  },

  month: {
    fontSize: 20,
    fontWeight: "bold",
  },

  week: {
    flexDirection: "row",
    width: 0.9 * windowWidth,
    height: 30,
    backgroundColor: "#6f8ca1",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // padding: 10
  },

  day: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "14.285%"
  },

  dayText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    alignItems: "center",

  },

  dateBox: {
    width: "14.285%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  date: {
     fontSize: 18
  },

  disabled: {
    width: "14.285%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    opacity: 0.2
  },

  today: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#e8effa",
    padding: 5
  },

})

function mapStateToProps(state) {
  return {
    daySelected: state.booking.daySelected,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setDay: (value) => dispatch(selectDay(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingCalendar);