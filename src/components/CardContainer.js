import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';
import Sound from 'react-native-sound';

class CardContainer extends Component {
  state = {
    posAnim: new Animated.Value(1000)
  }

  componentWillMount() {
    // Load the sound file
    this.whoosh1 = new Sound('horn1.mp3', Sound.MAIN_BUNDLE);
    this.whoosh2 = new Sound('horn2.mp3', Sound.MAIN_BUNDLE);
  }

  selectCard(color = null) {
    if (color === 'yellow') {
      this.whoosh1.play();
    } else if (color === 'red') {
      this.whoosh2.play();
    }

    // Trigger animation
    Animated.timing(
      this.state.posAnim, 
      { toValue: 10 }
    ).start();

    this.props.updateSelected(color);
  }

  resetSelect() {
    this.whoosh1.stop();
    this.whoosh2.stop();

    // Reset animation starting position state
    this.setState({
      posAnim: new Animated.Value(1000)
    });

    this.props.updateSelected(null);
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
      <Animated.View style={ [styles[color], styles.cardFull, { top: this.state.posAnim }] }>
        <TouchableOpacity style={{ flex: 1 }} onPress={this.resetSelect.bind(this) }>
          <View />
        </TouchableOpacity>
      </Animated.View>
    )
  }

  render() {
    const { selected: color } = this.props;
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
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  },
  cardFull: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 12,
    margin: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  },
  yellow: {
    backgroundColor: 'yellow'
  },
  red: {
    backgroundColor: 'red'
  }
};

export default CardContainer;
