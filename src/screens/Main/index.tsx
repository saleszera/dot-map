import MapView, {UrlTile} from 'react-native-maps';

const Main: React.FC = () => {
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  
  return (
    <MapView
      initialRegion={initialRegion}
      style={{flex: 1}}
    >
      <UrlTile
        urlTemplate={`http://c.tile.openstreetmap.org/{z}/{x}/{y}.png`}
        maximumZ={19}
        flipY={false}
      />

    </MapView>
  )
}

export default Main