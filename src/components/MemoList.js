/* eslint-disable prefer-template */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';

function MemoList(props) {
  const { navigation, memoList } = props;

  return (
    <View style={styles.memoList}>
      <FlatList
        data={memoList}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => { navigation.navigate('MemoDetail', { memo: item }); }}>
            <View style={styles.memoListItem}>
              <Text style={styles.memoTitle}>{item.body.substring(0, 10)}</Text>
              <Text style={styles.memoDate}>{dateString(item.createdOn.toDate())}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
}

function dateString(date) {
  return date.getFullYear()
    + '/' + ('0' + (date.getMonth() + 1)).slice(-2)
    + '/' + ('0' + date.getDate()).slice(-2)
    + ' ' + ('0' + date.getHours()).slice(-2)
    + ':' + ('0' + date.getMinutes()).slice(-2)
    + ':' + ('0' + date.getSeconds()).slice(-2);
}

const MemoListType = PropTypes.shape({
  body: PropTypes.string,
  createdOn: PropTypes.shape(),
});

MemoList.propTypes = {
  navigation: PropTypes.shape().isRequired,
  memoList: PropTypes.arrayOf(MemoListType).isRequired,
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
