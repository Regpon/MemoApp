import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import '@firebase/firestore';

import PropTypes from 'prop-types';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

// navigation.navigate('MemoEdit');
export default function MemoListScreen(props) {
  const { currentUser } = firebase.auth();
  const db = firebase.firestore();
  const { navigation } = props;
  const [memoList, setMemoList] = useState([]);

  useEffect(() => {
    db.collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((snapshot) => {
        const loadedMemoList = [];
        snapshot.forEach((doc) => {
          loadedMemoList.push({ ...doc.data(), key: doc.id });
        });
        setMemoList(loadedMemoList);
      });
    /*
      .get()
      .then((snapshot) => {
        console.log('loaded');
        snapshot.forEach((doc) => {
          loadedMemoList.push({ ...doc.data(), key: doc.id });
        });
        setMemoList(loadedMemoList);
      })
      .catch((error) => {
        console.log(error);
      });
      */
  }, [db]);

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
