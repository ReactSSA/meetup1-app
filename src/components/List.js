import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import ListItem from './ListItem';

const style = {
    container: {
        flex: 1
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
        const { items, filterBy } = this.state;

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
