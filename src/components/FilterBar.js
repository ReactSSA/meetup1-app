import React from 'react';
import {
    Platform,
    Text,
    View
} from 'react-native';
import Button from './Button';

const style = {
    barContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    button: {
        backgroundColor: 'white',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderStyle: 'solid',
        borderRadius: 4,
        padding: 8,
        ...Platform.select({
            android: {
                borderWidth: 1
            },
            ios: {
                borderWidth: 0.5
            }
        }),
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
            height: 1,
            width: 0
        },
        shadowOpacity: 1,
        shadowRadius: 1
    },
    buttonText: {
        fontSize: 12
    }
};

const FilterBar = (props) => (
    <View style={style.barContainer}>
        <Button onPress={props.showFilter}>
            <View style={style.button}>
                <Text style={style.buttonText}>Filtrar</Text>
            </View>
        </Button>
        <Button onPress={props.showOrder}>
            <View style={style.button}>
                <Text style={style.buttonText}>Ordenar</Text>
            </View>
        </Button>
    </View>
);

export default FilterBar;
