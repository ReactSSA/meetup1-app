import React from 'react';
import { Image, Text, View } from 'react-native';

const style = {
    container: {
        alignItems: 'center',
        backgroundColor: '#282c34',
        flex: 1,
        justifyContent: 'center'
    }
};

const Loading = () => {
    return (
        <View style={style.container}>
            <Image source={require('../images/reactssa.png')} />
            <Text>Carregando...</Text>
        </View>
    );
}

export default Loading;
