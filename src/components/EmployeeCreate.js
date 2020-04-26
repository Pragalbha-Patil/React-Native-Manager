import React, {Component} from 'react';
import {View, Picker, Text} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from "../actions";
import {Button, CardSection, Input} from "./common";

class EmployeeCreate extends Component {

    render() {

        const DaysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Enter employee name"
                        onChangeText={
                            value => this.props.employeeUpdate({prop: 'name', value})
                        }
                        value={this.props.name}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-555"
                        onChangeText={
                            value => this.props.employeeUpdate({prop: 'phone', value})
                        }
                        value={this.props.phone}
                    />
                </CardSection>
                <CardSection>
                    <Text style={{fontSize: 18, paddingLeft: 20, flex: 1, paddingTop: 15}}>Shift</Text>
                    <Picker
                        style={{flex:1}}
                        value={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
                    >
                        {
                            DaysOfWeek.map((day) => {
                                return (<Picker.Item label={day} value={day} />);
                            })
                        }
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button>Save</Button>
                </CardSection>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);