import React, { Component } from 'react';
import {Card, CardSection, Input, Button} from './common';
import { StyleSheet, Text,Image,View } from 'react-native';
import IconHeader from './IconHeader';

class Code extends Component {

	constructor(){
 
    super();
 
    this.state={
      NumberHolder : 0
 
    }
  }

	render() {


		return (
			<Card>
				<CardSection>
					<IconHeader />
				</CardSection>


				<CardSection>
					<Button onPress={this.GenerateRandomNumber}>
              		Get Code
              		</Button>
				</CardSection>


				<CardSection>
				      <View style={styles.MainContainer} >
                      <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.NumberHolder}</Text>
        			</View>
				</CardSection>


				<CardSection>
						<Text style={{fontWeight: 'bold'}}>Connect and party</Text>
				</CardSection>
			</Card>

			)

	}

	GenerateRandomNumber=()=>
{

var RandomNumber = Math.floor(Math.random() * 10000) + 1 ;

this.setState({

  NumberHolder : RandomNumber

})
}

}







const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
 
});

export default Code;
