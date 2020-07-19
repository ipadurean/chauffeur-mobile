import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default class Calendar {

  static createMonth( month) {

    const now = new Date();
    const date = new Date(now.getFullYear(), month, 1);
    const daySelected = new Date().getTime()
    let select = new Date(now.getFullYear(), month, 1);
    select.setTime(daySelected);
    let daysArr = [];
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    let d = 1;
    for (let i = 0; i < date.getDay(); i++) {
      daysArr.push(
        <View style={styles.container} key={i + 100}>
          <Text style={styles.date}></Text>
        </View>
      )
    }
    while (d <= daysInMonth) {
      daySelected && d === select.getDate() ?
        daysArr.push(
          <View style={styles.container} key={d}>
            <Text style={styles.date}>{d}</Text>
          </View>
        ) :
        d === now.getDate() && now.getMonth() === date.getMonth() ?
          daysArr.push(
            <View style={styles.container} key={d}>
              <Text style={styles.date}>{d}</Text>
            </View>) :
          date.setDate(d) < now.getTime() ?
            daysArr.push(
              <View style={styles.container} key={d}>
                <Text style={styles.date}>{d}</Text>
              </View>
            ) :
            daysArr.push(
              <View style={styles.container} key={d}>
                <Text style={styles.date}>{d}</Text>
              </View>
            )
      d++
    }
    return daysArr;
  }
}

const styles = StyleSheet.create({
  container: {
    width: "14.285%",
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },

  date: {
    fontSize: 18,
  }
})