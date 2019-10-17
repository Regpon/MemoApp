import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PropTypes from 'prop-types';

export default function CircleButton(props) {
  const { title, style, reverseColor } = props;

  let bgColor = { backgroundColor: '#E31676' };
  let textColor = { color: '#fff' };

  if (reverseColor) {
    bgColor = { backgroundColor: '#fff' };
    textColor = { color: '#E31676' };
  }

  return (
    <View style={[styles.circleButton, style, bgColor]}>
      <Text style={[styles.circleButtonTitle, textColor]}>{title}</Text>
    </View>
  );
}

CircleButton.defaultProps = {
  style: {},
  reverseColor: false,
};

CircleButton.propTypes = {
  title: PropTypes.node.isRequired,
  style: PropTypes.shape(),
  reverseColor: PropTypes.bool,
};

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
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
    fontSize: 32,
    lineHeight: 32,
  },
});
