import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from "./EmployeeFormReducer";

export default combineReducers({
    // will return `state.auth` and our children reside in `AuthReducer.js`
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});
