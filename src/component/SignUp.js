import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

const ROOT_URL = 'https://us-central1-one-time-password-3c093.cloudfunctions.net';

class SignUp extends Component {
    state = { phone: '' };

    handleSubmit = async () => {
        try {
            const response = await fetch(`${ROOT_URL}/createUser`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: this.state.phone
                })
            });
            console.log(response);
            const response1 = await fetch(`${ROOT_URL}/requestOneTimePassword`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: this.state.phone
                })
            });
            console.log(response1);
        } catch (Error) {
            console.log(Error);
        }
    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter your phone number </FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>
                <Button
                    onPress={this.handleSubmit.bind(this)}
                    title="Submit"
                />
            </View>
        );
    }
}

export default SignUp;
