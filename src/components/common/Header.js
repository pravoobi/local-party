// Import libraries for making a component
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


// Make a component
const Header = (props) => {
  const { textStyle, viewStyle, iconView, textView } = styles;

  return (
    <View style={viewStyle}>
      <View style={iconView}>
        <TouchableOpacity onPress={props.onPress}>
          <Icon
            name={props.iconName}
            style={{
              fontSize: props.iconFontSize, 
              color: props.iconColor,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>

      </View>
      <View style={textView}>
      <Text style={textStyle}>{props.headerText}</Text>
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  },
  iconView:{
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginLeft: 3,
    marginTop: 10


  },
  textView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

// Make the component available to other parts of the app
export { Header };
