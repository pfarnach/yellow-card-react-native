import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import CardContainer from './components/CardContainer';

class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Header />
        <CardContainer />
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    flex: 1
  }
};

export default App;
