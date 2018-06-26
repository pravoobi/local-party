import React, { Component } from 'react';
import {Card, CardSection, Input, Button} from './common';
import { Text } from 'react-native';


class OTPSubmit extends Component{

	onOTPChange(text){
		this.props.otpChanged(text);
	}

	onButtonPress(){
		const { otp } = this.props;

		this.props.submitOTPAction({ otp });
	}

	render() {
		return (
				<Card>
					<CardSection>
						<Text>Hello Raj</Text>
						<Text>Submit your OTP</Text>
					</CardSection>
					<CardSection>
						<Input
							label= 'Mobile'
							onChangeText={this.onOTPChange.bind(this)}
							value={this.props.otp}
						>
						</Input>
					</CardSection>
					<Text style={styles.errorTextStyle}>{this.props.errorText}</Text>
					<CardSection>
						<Button onPress = {this.onButtonPress.bind(this)}>
							Submit
						</Button>
						<Button onPress = {this.onButtonPress.bind(this)}>
							Resend OTP
						</Button>
					</CardSection>
				</Card>
		)
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}


export default OTPSubmit;