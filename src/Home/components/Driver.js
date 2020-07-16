import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text, View } from 'react-native';

const Driver = (props) => {

  const { driver, home } = props
  return (
    <View>
      <Text>{driver.username}</Text>
      <Text>Rating {driver.rating} <Image src={{uri: star}} /></Text>
      <Text>Rate: ${driver.rate}/hour</Text>
      <Title3> ~ {driver.car} ~ </Title3>
        {home.clickSearch && <Text id="total">Total: ${driver.rate * (home.end - home.start)}</Text>}
          <TouchableOpacity>Book ride with this chauffeur</TouchableOpacity>
    </View>  
  )
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(Driver);