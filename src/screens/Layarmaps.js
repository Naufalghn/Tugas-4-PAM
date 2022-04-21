import React from 'react'
    import { SafeAreaView } from 'react-navigation'
    import Map from './Komponen/Map'

    const Layarmaps = ({ navigation }) => {
        return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Map />
        </SafeAreaView>
    )
    }

    export default Layarmaps