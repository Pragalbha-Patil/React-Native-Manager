import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Firebase from './firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import {Header} from './components/common';

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <SafeAreaView>
                    <Header headerText="Manager" />
                    <LoginForm />
                </SafeAreaView>
            </Provider>
        );
    }
}

export default App;
