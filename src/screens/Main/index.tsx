import MapView, { Marker, Callout } from 'react-native-maps';
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { locations } from '../../utils/institutions'
import { RootStackParamList } from '../../../types'
import { styles } from './styles'

type MainScreenProp = NativeStackNavigationProp<RootStackParamList, 'Main'>

const Main: React.FC = () => {
  const initialRegion = {
    latitude: -22.7309943,
    longitude: -45.1464314,
    latitudeDelta: 0,
    longitudeDelta: 0.09,
  }

  const { navigate } = useNavigation<MainScreenProp>()


  return (
    <MapView
      initialRegion={initialRegion}
      style={{flex: 1}}
    >
      {locations.map((item) => (
        <Marker
          key={item.institutionId}
          coordinate={item.location}
        >
          <Callout
            tooltip
            onPress={() => navigate('Institution', {institutionId: item.institutionId})}
          >
            <View style={styles.container}>
              <Text style={styles.title}>{item.institution.toUpperCase()}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  )
}

export default Main
