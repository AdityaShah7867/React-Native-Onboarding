import React from 'react';
import { Text, StyleSheet, Touchable,TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';

export default function HomeScreen() {
    const navigation = useNavigation();
    const handleReset = async() => {
        
       await removeItem('onboarded');
       navigation.navigate('Onboarding');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text>Congrats Now use App</Text>
            <Image
                source={require("../assets/Gif/box.gif")}
                style={styles.image}
              />
            <TouchableOpacity onPress={handleReset} style={styles.button}>
                <Text>Reset Onboarding</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 400,
    },
    button:{
        backgroundColor:'#a7f3d0',
        padding:10,
        borderRadius:10,
        marginTop:20
    }
});
