import React from 'react'
    import { SafeAreaView } from 'react-navigation'
    import {View,StyleSheet,Linking,Button} from 'react-native'
    import Header from './Komponen/header'
    
    
    const Listlayarmaps = ({ navigation }) => {
      return (
        <SafeAreaView forceInset={{ top: 'always' }}>
          <View>
        <Header textHeader={'List lokasi penting dibekasi'} />
      </View>
        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('http://www.malbekasi.com');

         }}

         title="Mall Summarecon Bekasi"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://www.summareconbekasi.com/facilities/masjid-raya-al-azhar');

         }}

         title="Masjid Summarecon Bekasi"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://binus.ac.id/bekasi-campus/');

         }}

         title="Binus University"

        />
        </View>

        

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://www.instagram.com/raoton_futsal/?hl=en');

         }}

         title="Futsal ALA-OLO"

        />
        </View>
        </SafeAreaView>
      )
    }
    const styles = StyleSheet.create({

      buttonContainer: {

        margin: 20
      }

    })

    
    export default Listlayarmaps