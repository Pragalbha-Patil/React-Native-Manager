import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password} = this.props; // destructuring email & pass from props
        this.props.loginUser({email, password}); // calling the loginUser action
    }

    renderError() {
        if(this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />

        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@example.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="Atleast 6 chars"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        secureTextEntry
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this. renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({auth}) => {

    const {email, password, error, loading} = auth;

    return {
        // got all state children from Reducers
        email,
        password,
        error,
        loading
    };
};

// connect args 1. mapStateToProps, 2. actions, 3. Component
export default connect(mapStateToProps, {
    emailChanged, // indicating email changes in input
    passwordChanged, // password changes
    loginUser, // firebase login user
})(LoginForm);
