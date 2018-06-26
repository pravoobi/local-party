import React, { Component } from 'react';
import {Card, CardSection, Input, Button} from './common';
import { Text, View, TouchableOpacity } from 'react-native';
import LocationItem from './LocationItem';

class Location extends Component{
	render(){
		const { events, onEventSelect } = this.props;
		console.log("locations", events);
		return(
				<View>
					{
						events.map(item => {return (<TouchableOpacity onPress = {() => onEventSelect(item.id)} key ={item.id}><CardSection key={item.id}>
																			<LocationItem eventitem={item}   />
																			</CardSection>
																			</TouchableOpacity>
																			)}
							)
					}
				</View>
		);
	}

}

export default Location;