import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'

function Main({ navigation }) {

    const [currentRegion, setCurrentRegion] = useState(null)

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync()

            if (granted) {
                const location = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                })

                const { latitude, longitude } = location.coords

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                })
            }
        }

        loadInitialPosition()
    }, [])

    if (!currentRegion) {
        return null
    }


    return (
        <>
        <MapView initialRegion={currentRegion} style={ styles.map }>
            <Marker coordinate={{ latitude:-25.472535, longitude: -49.2735347 }}>
                <Image source={{ uri: 'https://avatars0.githubusercontent.com/u/49824126?s=460&v=4' }} style={ styles.avatar } />

                <Callout onPress={() => {
                    navigation.navigate('Profile', { github_username: 'brnocesar' })
                }}>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Bruno Cesar</Text>
                        <Text style={styles.devBio}>Batatinha quando nasce, espalha rama pelo chão.</Text>
                        <Text style={styles.devTechs}>C, Python, PHP</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>

        <View style={styles.searchForm}>
            <TextInput 
                style={styles.searchInput}
                placeholder="Buscar Devs por tecnologia..."
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
            />

            <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
                <MaterialIcons name="my-location" size={20} style={styles.loadIcon} />
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 49,
        height: 49,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#f66545'
    },
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    devBio: {
        color: '#9e79ab',
        marginTop: 5
    },
    devTechs: {
        marginTop: 5
    },
    searchForm: {
        position: 'absolute',
        // bottom: 20,
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row'
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#fff',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.02,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2
    },
    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#2f4650',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    loadIcon: {
        color: '#fff'
    }
})

export default Main