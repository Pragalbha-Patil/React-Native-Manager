import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import {Header} from './components/common';

class App extends Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <SafeAreaView>
                    <Header headerText="Manager" />
                    <LoginForm />
                </SafeAreaView>
            </Provider>
        );
    }
}

export default App;
