import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import CardContainer from './components/CardContainer';

class App extends Component {
  state = {
    selected: null
  }

  updateSelected(color) {
    this.setState({ selected: color });
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.state.selected ? null : <Header /> }
        <CardContainer
          selected={ this.state.selected } 
          updateSelected={ color => this.updateSelected(color) }
        />
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
