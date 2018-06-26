import React, { Component } from 'react';
import {Card, CardSection, CardSectionColumn, Input, Button, Header} from './common';
import { Text,Image,View } from 'react-native';
import IconHeader from './IconHeader';

class Pass extends Component {

	render() {
		const {getProfileScreen, getPassScreen,iconPress} = this.props;
		const { eventGoing, backToEvents } = this.props;
		console.log("eventGoing[0]", eventGoing[0]);
		//const clubimageurl = eventGoing[0].clubimageurl;
		console.log("item", eventGoing[0]);
		console.log("item-name", eventGoing[0].date);
		return (

				<View>
				<Header 
					headerText = "Pass" 
					iconName = 'arrow-back' 
					iconFontSize = {30}
					iconColor = 'black'
					onPress = {() => backToEvents() }
				/>
				<Card>
					<CardSection>
						<View style={{flex: 1, flexDirection: 'row'}}>
							<Text style={{fontWeight: 'bold'}}>You are invited. Welcome!</Text>
						</View>
					</CardSection>

					<CardSection>

					<View style={styles.locationItem}>
						<View style={styles.locationImage}>
							<Image source={require('./locations/sixthelement.jpg')} style={{width: 380, height: 180, margin: 2}}/>
						</View>

					</View>
					</CardSection>
					<CardSection>
				
						<View style={styles.locationDescription}>
							<Text style={{fontWeight: 'bold'}}>{eventGoing[0].name}</Text>
							<Text>{eventGoing[0].details}</Text>
							<View style={{ flexDirection: 'row'}}>
								<Text style={{fontWeight: 'bold'}}>Date: </Text>
								<Text>{eventGoing[0].date.split('T')[0]}</Text>
							</View>
							<View style={{ flexDirection: 'row'}}>
								<Text style={{fontWeight: 'bold'}}>Time: </Text>
								<Text>{eventGoing[0].date.split('T')[1].split(':')[0]}:
								{eventGoing[0].date.split('T')[1].split(':')[1]}</Text>
							</View>

					</View>
					</CardSection>
					

				</Card>
				<Card>

					<CardSection>
						<Button >
							Add to the tab
						</Button>
					</CardSection>
		
					<CardSection>
						<IconHeader iconPress={iconPress} getProfileScreen = {getProfileScreen} getPassScreen = {getPassScreen} />
					</CardSection>
				</Card>
			</View>
				
			)
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

export default Pass;