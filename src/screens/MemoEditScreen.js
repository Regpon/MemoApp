import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

export default function MemoEditScreen() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.memoEditInput} multiline value="Hi" />
      <CircleButton name="check" />
    </View>
  );
}

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
