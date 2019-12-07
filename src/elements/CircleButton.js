import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

import PropTypes from 'prop-types';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontAwsome');

export default class CircleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, style, reverseColor, onPress } = this.props;
    const { fontLoaded } = this.state;
    let bgColor = { backgroundColor: '#E31676' };
    let textColor = { color: '#fff' };

    if (reverseColor) {
      bgColor = { backgroundColor: '#fff' };
      textColor = { color: '#E31676' };
    }

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, bgColor]}>
          {
            fontLoaded ? (
              <CustomIcon name={name} style={[styles.circleButtonTitle, textColor]} />
            ) : null
          }
        </View>
      </TouchableHighlight>
    );
  }
}

CircleButton.defaultProps = {
  style: {},
  reverseColor: false,
};

CircleButton.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.shape(),
  reverseColor: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwsome',
    fontSize: 24,
    lineHeight: 32,
  },
});
