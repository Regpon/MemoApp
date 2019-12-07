import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

function MemoList(props) {
  const { navigation } = props;
  return (
    <View style={styles.memoList}>
      <TouchableHighlight onPress={() => { navigation.navigate('MemoDetail'); }}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/10/10</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => { navigation.navigate('MemoDetail'); }}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/10/10</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => { navigation.navigate('MemoDetail'); }}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/10/10</Text>
        </View>
      </TouchableHighlight>

    </View>
  );
}

MemoList.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
