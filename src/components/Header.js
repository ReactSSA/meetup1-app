import React from 'react';
import { Image, View } from 'react-native';

const style = {
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowOpacity: 1,
        shadowRadius: 2
    },
    sanarLogo: {
        height: 40,
        width: 73
    },
    reactssaLogo: {
        height: 40,
        width: 44
    }
};

class Header extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <Image style={style.sanarLogo} source={require('../images/sanar.jpg')} />
                <Image style={style.reactssaLogo} source={require('../images/reactssa.png')} />
            </View>
        );
    }
}

export default Header;
