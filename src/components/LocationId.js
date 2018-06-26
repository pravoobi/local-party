import React, { Component } from 'react';
import {Card, CardSection, CardSectionColumn, Input, Button, Header} from './common';
import { Text, View, Image } from 'react-native';


class LocationItem extends Component{

	render(){
		const { eventselected, backToEvents, goEvent } = this.props;
		console.log("eventselected", eventselected);
		const clubimageurl = eventselected.clubimageurl;
		console.log("item", eventselected);
		console.log("item-name", eventselected.name);

		const Dimensions = require('Dimensions');
		const window = Dimensions.get('window');


		return(
				<View>
				<Header 
					headerText = "Event Page" 
					iconName = 'arrow-back' 
					iconFontSize = {30}
					iconColor = 'black'
					onPress = {() => backToEvents() }
				/>
				<Card>
					<CardSection>

					<View style={styles.locationItem}>
						<View style={styles.locationImage}>
							<Image source={{uri:clubimageurl}} style={{width: window.width-4, height: 300, margin: 2}}/>
						</View>

					</View>
					</CardSection>
					<CardSection>
				
						<View style={styles.locationDescription}>
							<Text style={{fontWeight: 'bold'}}>{eventselected.name}</Text>
							<Text>{eventselected.details}</Text>
							<View style={{ flexDirection: 'row'}}>
								<Text style={{fontWeight: 'bold'}}>Date: </Text>
								<Text>{eventselected.date.split('T')[0]}</Text>
							</View>
							<View style={{ flexDirection: 'row'}}>
								<Text style={{fontWeight: 'bold'}}>Time: </Text>
								<Text>{eventselected.date.split('T')[1].split(':')[0]}:
								{eventselected.date.split('T')[1].split(':')[1]}</Text>
							</View>

					</View>
					</CardSection>
					

				</Card>

				<Card>
					<CardSection>
						<Button
						onPress={()=> goEvent(eventselected.id)}
						>
							Going
						</Button>
						<Button

						>
							RSVP
						</Button>
					</CardSection>
				</Card>

			</View>
		);
	}

}

const styles = {
	locationItem: {
		flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
	},
  locationImage: {
    margin: 2,
  },
  locationDescription: {
  	margin: 2,
  	justifyContent: 'center',
    alignItems: 'flex-start',
  },
  containerStyle: {
  	flex: 1,
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default LocationItem;