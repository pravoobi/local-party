import React, { Component } from 'react';
import {Card, CardSection, Input, Button, Header} from './common';
import { Text, View, ScrollView } from 'react-native';
import IconHeader from './IconHeader';
import Locations from './Locations';
import MultiSelect from 'react-native-multiple-select';


class Home extends Component{
	render() {
		const {events, onEventSelect, userChoice, setUserChoice, items, netErrorMsg, iconPress} = this.props;
		console.log("home", events);
		console.log("items", items);

		return (
			<View style={{ flex: 1 }}>
				<Header headerText='Events' />
				<Text>{netErrorMsg}</Text>
			<ScrollView>	
			<Card>
				<Locations events = {events} onEventSelect={onEventSelect} />
				<Text style={{fontWeight: 'bold'}}>More places you would like to see ?</Text>
					<View style={{ flex: 1}}>
	        <MultiSelect
	          hideTags
	          items={items}
	          uniqueKey="id"
	          onSelectedItemsChange={() => setUserChoice}
	          ref={(component) => { this.multiSelect = component }}
	          selectedItems={userChoice}
	          selectText="Pick pubs"
	          searchInputPlaceholderText="Search Items..."
	          altFontFamily="ProximaNova-Light"
	          tagRemoveIconColor="#CCC"
	          tagBorderColor="#CCC"
	          tagTextColor="#CCC"
	          selectedItemTextColor="#CCC"
	          selectedItemIconColor="#CCC"
	          itemTextColor="#000"
	          searchInputStyle={{ color: '#CCC' }}
	          submitButtonColor="#CCC"
	          submitButtonText="Submit"
	        />
	        
	      	</View>
					
					
				<CardSection>
					<IconHeader iconPress ={iconPress}/>
				</CardSection>
			</Card>
			
	    </ScrollView>
			</View>
		)
	}
}

export default Home;
