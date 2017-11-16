import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-3c093.cloudfunctions.net';

class SignIn extends Component {
    state = { phone: '', code: '' };

    handleSubmit = async () => {
        try {
            const response = await fetch(`${ROOT_URL}/verifyOneTimePassword`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    phone: this.state.phone,
                    code: this.state.code
                })
            });

            const res = await response.json();
            console.log(res.token);
            firebase.auth().signInWithCustomToken(res.token)
                .then(() => {
                    console.log('success');
                })
                .catch((Error) => {
                    console.log(Error);
                });
        } catch (Error) {
            console.log(Error);
        }
    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel> enter your phone number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel> enter code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}
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

export default SignIn;
