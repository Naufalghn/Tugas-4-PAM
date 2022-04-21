import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: -6.239228085988987,
        longitude: 107.00032720379929,
        latitudeDelta: 1,
        longitudeDelta: 2
      }}
    >
      <MapView.Marker
      coordinate={{
        latitude: -6.22966393712027,
        longitude:106.99629201032288,
      }}
      title={"Mall Summarecon Bekasi"}
      description={"Mall terbaik dibekasi"}
      />
    

    <MapView.Marker
      coordinate={{
        latitude:-6.221529485579479,
        longitude:107.00261349122361,
      }}
      title={"Masjid Al-Azhar Summarecon"}
      description={"masjid bagus dibekasi"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-6.219490844514518,
        longitude:106.99981839682758,
      }}
      title={"Binus University"}
      description={"Kampus swasta terbaik di Bekasi"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-6.221613312085693,
        longitude: 107.00008661770079,
      }}
      title={"Futsal ALA-OLO"}
      description={"Lapangan futsal terbaik di Bekasi."}
      />

    </MapView>
  )
} 

const styles = StyleSheet.create({
  map: {
    height
  }
})

export default Map