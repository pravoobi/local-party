import React, { Component } from 'react';
import {Card, CardSection, Input, Button} from './common';
import { Text, View, Image } from 'react-native';

class LocationItem extends Component{
	render(){
		const { eventitem } = this.props;
		const clubimageurl = eventitem.clubimageurl;
		console.log("item", eventitem);
		console.log("item-name", eventitem.name);

		return(
			<View style={styles.locationItem}>
				<View style={styles.locationImage}>
					<Image source={{uri:clubimageurl}} style={{width: 130, height: 130, margin: 2}}/>
				</View>
				<View style={styles.locationDescription}>
					<Text style={{fontWeight: 'bold'}}>{eventitem.name}</Text>
					<Text>{eventitem.intro}</Text>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text style={{fontWeight: 'bold'}}>Date: </Text>
						<Text>{eventitem.date.split('T')[0]}</Text>
					</View>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text style={{fontWeight: 'bold'}}>Time: </Text>
						<Text>{eventitem.date.split('T')[1].split(':')[0]}:
						{eventitem.date.split('T')[1].split(':')[1]}</Text>
					</View>
				</View>
			</View>
		);
	}

}

const styles = {
	locationItem: {
		flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
	},
  locationImage: {
    margin: 2,
  },
  locationDescription: {
  	flex: 1,
  	margin: 2,
  }
};

export default LocationItem;