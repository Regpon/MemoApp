import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import CircleButton from '../elements/CircleButton';

export default function MemoEditScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TextInput style={styles.memoEditInput} multiline value="Hi" />
      <CircleButton name="check" onPress={() => { navigation.goBack(); }} />
    </View>
  );
}

MemoEditScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
    flex: 1,
    fontSize: 16,
  },
});
