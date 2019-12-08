import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import CircleButton from '../elements/CircleButton';

export default function MemoDetaiScreen(props) {
  const { navigation } = props;
  const { params } = navigation.state;
  const [memo, setMemo] = useState(params.memo);

  useEffect(() => {
    setMemo(params.memo);
  });

  return (
    <View style={styles.cintainer}>
      <View style={styles.memoHeader}>
        <View>
          <Text style={styles.memoHeaderTitle}>{ memo.body.substring(0, 10) }</Text>
          <Text style={styles.memoHeaderDate}>{ dateString(memo.createdOn.toDate()) }</Text>
        </View>
      </View>
      <View style={styles.memoContent}>
        <Text style={styles.memoBody}>
          {memo.body}
        </Text>
      </View>
      <CircleButton name="pencil" reverseColor onPress={() => { navigation.navigate('MemoEdit', { memo }); }} style={styles.editButton} />
    </View>
  );
}

function dateString(date) {
  const dateStr = date.toISOString().substring(0, 19);
  return dateStr.replace('T', ' ');
}

MemoDetaiScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

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
  memoBody: {
    lineHeight: 22,
    fontSize: 15,
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
