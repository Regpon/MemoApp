import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default function BodyText(props) {
  const { children } = props;
  const { name } = props;
  return (
    <View>
      <Text style={styles.text}>
        {children}
      </Text>
      <Text>
        {name}
      </Text>
    </View>
  );
}

BodyText.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#EEE',
  },
});
