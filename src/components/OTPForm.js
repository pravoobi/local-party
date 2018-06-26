import React, { Component } from 'react';
import {Card, CardSection, Input, Button} from './common';
import { Text } from 'react-native';


class OTPForm extends Component{

	onMobileChange(text){
		this.props.mobileChanged(text);
	}

	onButtonPress(){
		const { mobile } = this.props;

		this.props.reqOTPAction({ mobile });
	}

	render() {
		return (
				<Card>
					<CardSection>
						<Text>Hello Ramesh</Text>
						<Text>Enter your Mobile number for OTP</Text>
					</CardSection>
					<CardSection>
						<Input
							label= 'Mobile'
							onChangeText={this.onMobileChange.bind(this)}
							value={this.props.mobile}
						>
						</Input>
					</CardSection>
					<Text style={styles.errorTextStyle}>{this.props.errorText}</Text>
					<CardSection>
						<Button onPress = {this.onButtonPress.bind(this)}>
							Send OTP
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

export default OTPForm;