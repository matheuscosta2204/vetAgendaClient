import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {

    const login = () => {
        navigation.navigate('Form');
    }

    return (
        <View stlye={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={login}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../assets/images/google.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;