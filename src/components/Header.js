import React from 'react';
import { Text } from 'react-native';

const Header = () => {
	return (<Text style={ styles.headerText }>Get 'em outta here</Text>);
};

const styles = {
	headerText: {
    alignSelf: 'center',
    marginBottom: 60,
    fontSize: 26,
    color: '#999999'
  }
}

export default Header;