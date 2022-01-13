import { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { View, Text, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import * as Location from 'expo-location';

import { locations } from '../../utils/institutions'
import { RootStackParamList } from '../../../types'
import { styles } from './styles'

type MainScreenProp = NativeStackNavigationProp<RootStackParamList, 'Main'>
type ICurrentLocation = {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
}

const Main: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<ICurrentLocation>({} as ICurrentLocation)
  const [loading, setLoading] = useState(true)

  const { navigate } = useNavigation<MainScreenProp>()

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if(status !== 'granted'){
        console.log('Permission is not granted')
        return;
      }

      const currentPosition = await Location.getCurrentPositionAsync({accuracy: 5})

      if(currentPosition){
        setCurrentLocation(
          {
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 0.11,
          }
        )
      }

      setLoading(false)
    })();
  }, [])

  if(loading){
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    )
  }

  return (
    <MapView
      initialRegion={currentLocation}
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
