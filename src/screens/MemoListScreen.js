import React from 'react';
import { View, StyleSheet } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton title="+" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
