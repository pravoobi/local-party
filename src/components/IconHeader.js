import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


class IconHeader extends React.Component{

  render(){
    const {iconPress} = this.props;
   return(
    <View style={styles.iconHeaderStyle}>
      <TouchableOpacity
      onPress={() => iconPress('events')}
      >
      <Icon
        name='home'
        style={{
          fontSize: 30,
          color: 'black',
          alignSelf: 'center',
        }}
      />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => iconPress('profileScreen')}
      >
      <Icon
        name='person'
        style={{
          fontSize: 30, 
          color: 'black',
          alignSelf: 'center',
        }}
      />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => iconPress('passScreen')}
      >
      <Icon
            name='description'
            style={{
              fontSize: 30, 
              color: 'black',
              alignSelf: 'center',
            }}
      />
      </TouchableOpacity>
    </View>
   );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  iconHeaderStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default IconHeader;
