import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import '@firebase/firestore';

import PropTypes from 'prop-types';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

// navigation.navigate('MemoEdit');
export default function MemoListScreen(props) {

  const [memoList, setMemoList] = useState([]);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const loadedMemoList = [];
    db.collection(`users/${currentUser.uid}/memos`).get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          loadedMemoList.push({ ...doc.data(), key: doc.id });
        });
        // stateに入れる
        setMemoList(loadedMemoList);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <MemoList navigation={navigation} memoList={memoList} />
      <CircleButton name="plus" onPress={() => { handlePress(navigation); }} />
    </View>
  );
}

function handlePress(navigation) {
  navigation.navigate('MemoCreate');
}

MemoListScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});
