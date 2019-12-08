import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Loading = (props) => {
  const { text, isLoading } = props;

  if (!isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  text: {
    fontSize: 16,
    margin: 20,
  },
});

export default Loading;
