import React, { Component } from 'react';
import {Card, CardSection, Input, Button} from './common';
import { Text } from 'react-native';

class Events extends Component{
	render(){
	const {eventslist=[1,2,3]} = this.props;

		return(
			{eventslist.map(item => console.log(item));}
			

		);
	}

}

export default Events;