import React from 'react';
import { Text, View } from 'react-native';
import Header from './Header';
import List from './List';
import Loading from './Loading';

const style = {
    container: {
        flex: 1
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: null
        };
    }

    componentDidMount() {
        fetch('http://demo6669321.mockable.io/livros')
            .then(response => response.json()
            .then(({ data }) => this.setState({ books: data })))
            .catch(error => console.log(error));
    }

    render() {
        const { books } = this.state;

        if (books === null) {
            return <Loading />;
        }

        return (
            <View style={style.container}>
                <Header />
                <List items={this.state.books} />
            </View>
        );
    }
}

export default App;
