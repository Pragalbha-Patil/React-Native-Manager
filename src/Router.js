import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeesList from './components/EmployeesList';
import EmployeeCreate from './components/EmployeeCreate';

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
                    />
                </Scene>
                <Scene key="main" initial>
                    <Scene
                        key="employeeList"
                        component={EmployeesList}
                        title="Employees"
                        titleStyle={{flex: 1, textAlign: 'center'}}
                        rightTitle="Add ＋"
                        onRight={() => {Actions.employeeCreate();} }
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate}
                           title="Create Employee" />
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;
