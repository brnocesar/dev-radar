import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Detail = () => {

    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }


    return (

        <View style={styles.container} >
            <TouchableOpacity onPress={handleNavigateBack} >
                <Icon name="arrow-left" size={30} color="#34cb79" />
            </TouchableOpacity>

            <Text style={styles.title}>Tela de detalhes</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20 + Constants.statusBarHeight,
    },

    title: {
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 24,
        color: '#322153',
    },
});

export default Detail;