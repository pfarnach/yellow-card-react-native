import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation
} from 'react-native';
import Sound from 'react-native-sound';

class CardContainer extends Component {
  state = {
    selected: null
  }

  componentWillMount() {
    // Load the sound file
    this.whoosh = new Sound('rasta-horn.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
      } else {
        console.log(`duration in seconds: ${this.whoosh.getDuration()} number of channels: ${this.whoosh.getNumberOfChannels()}`);
      }
    });    
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  selectCard(color = null) {
    this.whoosh.play();
    this.setState({ selected: color });
  }

  resetSelect() {
    this.setState({ selected: null });
  }

  renderMain() {
    return (
      <View style={ styles.cardContainer }>
        <TouchableOpacity style={ [styles.card, styles.yellow] } onPress={ () => this.selectCard('yellow') }>
          <View />
        </TouchableOpacity>
        <TouchableOpacity style={ [styles.card, styles.red] } onPress={ () => this.selectCard('red') }>
          <View />
        </TouchableOpacity>
      </View>
    );
  }

  renderFullCard(color) {
    return (
      <TouchableOpacity style={ [styles[color], styles.cardFull] } onPress={this.resetSelect.bind(this) }>
        <View />
      </TouchableOpacity>
    )
  }

  render() {
    const { selected: color } = this.state;
    return color === null ? this.renderMain() : this.renderFullCard(color);
  }
}

const styles = {
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: {
    flex: 1,
    height: 260,
    margin: 20,
    borderRadius: 12
  },
  cardFull: {
    position: 'absolute',
    top: 10,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 12,
    margin: 20
  },
  yellow: {
    backgroundColor: 'yellow'
  },
  red: {
    backgroundColor: 'red'
  }
};

export default CardContainer;
