import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CircleButton from '../elements/CircleButton';

export default function MemoEditScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.memoEditInput}>
        <Text>Hi</Text>
      </View>
      <CircleButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  memoEditInput: {

  },
});
