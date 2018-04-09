import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';

const FILTER_ITEMS = ['Medicina', 'Odontologia', 'Enfermagem'];

const style = {
    filters: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        borderColor: '#DFDFDF',
        borderWidth: 0.5,
        padding: 8
    },
    selected: {
        color: '#136599'
    }
}

const Filters = ({ filterBy, selected }) => {
    return (
        <View style={style.filters}>
        </View>
    );
}

export default Filters;
