import MapView, {Marker, Callout} from 'react-native-maps';
import {View, Text, StyleSheet} from 'react-native'

const Main: React.FC = () => {
  const initialRegion = {
    latitude: -22.7309943,
    longitude: -45.1464314,
    latitudeDelta: 0,
    longitudeDelta: 0.09,
  }

  const locations = [
    {
      institution: 'usp',
      description: "Esta instituição possui diversos cursos de técnologia.",
      location: {
        latitude: -22.7054356,
        longitude: -45.0999279,
      }
    },
    {
      institution: 'unip',
      description: "Esta instituição possui cursos relacionados a data science.",
      location: {
        latitude: -23.2579251,
        longitude: -45.9238511,
      }
  },
]

  return (
    <MapView
      initialRegion={initialRegion}
      style={{flex: 1}}
    >
      {locations.map((item, index) => (
        <Marker
          key={index}
          coordinate={item.location}
        >
          <Callout
            tooltip
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

const styles = StyleSheet.create({
  container: {
    maxHeight: 300,
    maxWidth: 254,
    backgroundColor: '#f8f8f8',
    padding: 8,
    borderRadius: 4
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    textAlign: 'justify',
  }
})

export default Main
