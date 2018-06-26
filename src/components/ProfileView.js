import React, { Component } from 'react';
import {Card, CardSection, CardSectionColumn, Input, Button, Header} from './common';
import { Text,Image, TextInput, View } from 'react-native';
import IconHeader from './IconHeader';

class ProfileView extends Component {
  show(){
    pick(source => this.props.getImage(source));
  }

  render() {
    const {getProfileScreen, getPassScreen, iconPress} = this.props;
    const {profileData} = this.props;
    const { backToEvents } = this.props;
      let img = profileData.avatarSource == null? null:
        <Image 
          source={{uri: `data:image/jpg;base64,${profileData.avatarSource.uri}`}}
            style={{height: 130, width:130,borderColor: 'gray', borderWidth: 1 , borderRadius:100}} />             

  return (
      <View>
        <Header 
          headerText = "Profile" 
          iconName = 'arrow-back' 
          iconFontSize = {50}
          iconColor = 'black'
          onPress = {() => backToEvents() }
        />
    <Card>
      <CardSection>
        {img} 
      </CardSection>

      <CardSection>
        <Text> Your childhood Nickname </Text>
      </CardSection>

      <CardSection>
        <Text>{profileData.qsn1}</Text>
      </CardSection>

      <CardSection>
        <Text> Your favourite sports </Text>
      </CardSection>
      <CardSection>
        <Text>{profileData.qsn2}</Text>
      </CardSection>
      <CardSection>
            <IconHeader iconPress={iconPress} getProfileScreen = {getProfileScreen} getPassScreen = {getPassScreen} />
      </CardSection>
    </Card>
    </View>
    )
  }
}

export default ProfileView;

