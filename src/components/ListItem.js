import React from 'react';
import { Image, Text, View } from 'react-native';

const style = {
    item: {
        backgroundColor: 'white',
        padding: 16
    },
    imageContainer: {
        backgroundColor: '#E5E9F2',
        borderRadius: 5,
        padding: 16
    },
    image: {
        alignSelf: 'center',
        height: 160,
        width: 160
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8,
        textAlign: 'center'
    },
    author: {
        fontSize: 12,
        textAlign: 'center'
    },
    price: {
        color: '#F33F0B',
        fontSize: 18,
        marginTop: 8,
        textAlign: 'center'
    }
};

const formatPrice = price => `${price.toFixed(2)}`.replace('.', ',');

const ListItem = ({ item }) => {
    return (
        <View style={style.item}>
            <View style={style.imageContainer}>
                <Image style={style.image} source={{ uri: item.image }} />
            </View>
            <View>
                <Text style={style.title}>{item.titulo}</Text>
                {item.autores.map((autor, index) => (
                    <Text key={`author-${index}`} style={style.author}>{autor}</Text>
                ))}
                <Text style={style.price}>Por R$ {formatPrice(item.preco)}</Text>
            </View>
        </View>
    );
}

export default ListItem;
