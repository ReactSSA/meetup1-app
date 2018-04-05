import React from 'react';
import { Image, Platform, StatusBar, View } from 'react-native';

const style = {
    container: {
        alignItems: 'flex-end',
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 68,
        justifyContent: 'space-between',
        marginBottom: 8,
        paddingBottom: 8,
        paddingHorizontal: 16,
        ...Platform.select({
            android: {
                elevation: 4,
                paddingTop: 16
            },
            ios: {
                paddingTop: 20,
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowOffset: {
                    height: 2,
                    width: 0
                },
                shadowOpacity: 1,
                shadowRadius: 2
            }
        })
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
                <StatusBar barStyle="dark-content" />
                <Image style={style.sanarLogo} source={require('../images/sanar.jpg')} />
                <Image style={style.reactssaLogo} source={require('../images/reactssa.png')} />
            </View>
        );
    }
}

export default Header;
