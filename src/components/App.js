import React from 'react';
import { StatusBar, Text, View } from 'react-native';

const style = {
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
};

class App extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <Text>Meu App está rodando!</Text>
            </View>
        );
    }
}

export default App;
