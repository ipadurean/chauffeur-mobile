import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 8,
    lineHeight: 25,
    height: 500
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  },
});