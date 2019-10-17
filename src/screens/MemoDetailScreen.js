import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

export default function MemoDetaiScreen() {
  return (
    <View style={styles.cintainer}>
      <View style={styles.memoHeader}>
        <View>
          <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
          <Text style={styles.memoHeaderDate}>2019/10/16</Text>
        </View>
      </View>
      <View style={styles.memoContent}>
        <Text>
          講座のアイデアです。
        </Text>
      </View>
      <CircleButton name="pencil" style={styles.editButton} reverseColor />
    </View>
  );
}

const styles = StyleSheet.create({
  cintainer: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  editButton: {
    top: 75,
  },
});
