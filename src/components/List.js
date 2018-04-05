import React from 'react';
import { FlatList, Modal, Text, View } from 'react-native';
import Button from './Button';
import FilterBar from './FilterBar';
import ListItem from './ListItem';

const FILTER_ITEMS = ['Medicina', 'Odontologia', 'Enfermagem'];

const style = {
    container: {
        flex: 1
    },
    modal: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        flex: 1,
        justifyContent: 'center'
    },
    buttonsContainer: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: '80%'
    },
    buttonsHeader: {
        alignItems: 'center',
        borderBottomColor: '#484848',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8
    },
    closeButton: {
        backgroundColor: 'white',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderStyle: 'solid',
        borderRadius: 4,
        borderWidth: 1,
        padding: 8
    },
    closeButtonText: {
        fontSize: 10
    },
    optionButton: {
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
            filterBy: null,
            orderBy: null,
            filterVisible: false,
            orderVisible: false
        };
    }

    _closeFilterModal = () => this.setState({ filterVisible: false })

    _showFilterModal = () => this.setState({ filterVisible: true })

    _filterBy = (category) => {
        const items = category === null
            ? this.props.items
            : this.props.items.filter(item => item.categoria === category);
        this.setState({ items, filterBy: category }, this._closeFilterModal);
    }

    _closeOrderModal = () => this.setState({ orderVisible: false })

    _showOrderModal = () => this.setState({ orderVisible: true })

    _orderByName = () => {
        const items = this.state.items.sort((curr, next) => {
            if (curr.titulo > next.titulo) return 1;
            if (curr.titulo < next.titulo) return -1;
            return 0;
        });
        this.setState({ items, orderBy: 'nome' }, this._closeOrderModal);
    }

    _orderByPrice = () => {
        const items = this.state.items.sort((curr, next) => curr.preco - next.preco);
        this.setState({ items, orderBy: 'preco' }, this._closeOrderModal);
    }

    render() {
        const {
            items,
            filterBy,
            filterVisible,
            orderBy,
            orderVisible
        } = this.state;

        return (
            <View style={style.container}>
                <FilterBar showFilter={this._showFilterModal} showOrder={this._showOrderModal} />
                <FlatList
                    data={items}
                    extraData={orderBy}
                    keyExtractor={item => `book-${item.id}`}
                    renderItem={({ item }) => <ListItem key={item.id} item={item} />} />
                <Modal
                    transparent
                    animationType={'slide'}
                    onRequestClose={() => this._closeFilterModal()}
                    visible={filterVisible}>
                    <View style={style.modal}>
                        <View style={style.buttonsContainer}>
                            <View style={style.buttonsHeader}>
                                <Text>Filtrar por</Text>
                                <Button onPress={this._closeFilterModal}>
                                    <View style={style.closeButton}>
                                        <Text style={style.closeButtonText}>Fechar</Text>
                                    </View>
                                </Button>
                            </View>
                            <Button onPress={() => this._filterBy(null)} style={style.optionButton}>
                                <Text style={filterBy === null ? style.selected : {}}>Todas</Text>
                            </Button>
                            {FILTER_ITEMS.map((category, index) => (
                                <Button
                                    key={`filter-button-${index}`}
                                    onPress={() => this._filterBy(category.toLowerCase())}
                                    style={style.optionButton}>
                                    <Text style={filterBy === category.toLowerCase() ? style.selected : {}}>
                                        {category}
                                    </Text>
                                </Button>
                            ))}
                        </View>
                    </View>
                </Modal>
                <Modal
                    transparent
                    animationType={'slide'}
                    onRequestClose={() => this._closeOrderModal()}
                    visible={orderVisible}>
                    <View style={style.modal}>
                        <View style={style.buttonsContainer}>
                            <View style={style.buttonsHeader}>
                                <Text>Ordenar por</Text>
                                <Button onPress={this._closeOrderModal}>
                                    <View style={style.closeButton}>
                                        <Text style={style.closeButtonText}>Fechar</Text>
                                    </View>
                                </Button>
                            </View>
                            <Button onPress={this._orderByName} style={style.optionButton}>
                                <Text style={orderBy === 'nome' ? style.selected : {}}>Nome</Text>
                            </Button>
                            <Button onPress={this._orderByPrice} style={style.optionButton}>
                                <Text style={orderBy === 'preco' ? style.selected : {}}>Preço</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default List;
