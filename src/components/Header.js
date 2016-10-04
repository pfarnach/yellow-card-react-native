import React from 'react';
import { Text } from 'react-native';

const Header = () => {
	return (<Text style={ styles.headerText }>Get 'em out of here</Text>);
};

const styles = {
	headerText: {
    alignSelf: 'center',
    marginBottom: 60,
    fontSize: 18,
    color: '#999999'
  }
}

export default Header;