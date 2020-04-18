import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeesList from './components/EmployeesList';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Login"
                        titleStyle={{flex: 1, textAlign: 'center'}}
                        initial
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                        key="employeeList"
                        component={EmployeesList}
                        title="Employees"
                        titleStyle={{flex: 1, textAlign: 'center'}}
                        rightTitle="Add +"
                        onRight={() => {console.log("right");} }
                    />
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;
