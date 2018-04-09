import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import ListItem from './ListItem';

const FILTER_ITEMS = ['Medicina', 'Odontologia', 'Enfermagem'];

const style = {
    container: {
        flex: 1
    },
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
};

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: props.items,
            filterBy: null
        };
    }

    render() {
        const { items } = this.state;

        return (
            <View style={style.container}>
                <FlatList
                    data={items}
                    keyExtractor={item => `book-${item.id}`}
                    renderItem={({ item }) => <ListItem key={item.id} item={item} />} />
            </View>
        );
    }
}

export default List;
