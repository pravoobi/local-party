import React, { Component } from 'react';
import {Card, CardSection, Input, Button} from './common';
import { Text,Image, TextInput } from 'react-native';
import pick from './picker.js';


class Registration extends Component {

    qsn1change(text){
        this.props.qsn1fn(text);
        console.log('Nitin Grover');
      }
      qsn2change(text){
        this.props.qsn2fn(text);
      }

   show(){
          pick(source => this.props.getImage(source));
          }


render() {

const {qsn2fn,qsn1fn, getEventScreen, state} = this.props;



let img = state.profile.avatarSource == null? null:

  <Image 
    source={{uri: `data:image/jpg;base64,${state.profile.avatarSource.uri}`}}

      style={{height: 130, width:130,borderColor: 'gray', borderWidth: 1 , borderRadius:100}}
      />
             

return (

      <Card>
            <Text> Puserid: {this.props.state.paramUserid} </Text>
              <CardSection>
              {img} 
              </CardSection>

              <CardSection>
              <Button onPress = {this.show.bind(this)}>
              Choose Image
              </Button>
              </CardSection>

              <CardSection>
              <Text> What was your childhood nickname? </Text>
              </CardSection>

              <CardSection>
              
              <Input
              onChangeText={(text) => qsn1fn(text)}
              placeholder="Answer"
              value={state.profile.qsn1}
              />
              </CardSection>

              <CardSection>
              <Text> Which sports you like most? </Text>
              </CardSection>

              <CardSection>
              <Input
              onChangeText={(text) => qsn2fn(text)}
              placeholder="Answer"
              value={state.profile.qsn2}
              />
              </CardSection>

              <CardSection>
              <Button onPress={()=> getEventScreen()}>
              Submit
              </Button>
              </CardSection>

        </Card>

      )
  }


}

export default Registration;

