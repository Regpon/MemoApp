import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import '@firebase/firestore';

import CircleButton from '../elements/CircleButton';

export default function MemoEditScreen(props) {
  const { navigation } = props;
  const { params } = navigation.state;
  const [memo, setMemo] = useState(params.memo);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset="80">
      <TextInput
        style={styles.memoEditInput}
        multiline
        value={memo.body}
        onChangeText={(value) => { setMemo({ ...memo, body: value }); }}
      />
      <CircleButton name="check" onPress={() => { submitHandler(memo, navigation); }} />
    </KeyboardAvoidingView>
  );
}

function submitHandler(memo, navigation) {
  const { currentUser } = firebase.auth();
  const db = firebase.firestore();
  const dateTime = firebase.firestore.Timestamp.now();
  db.collection(`users/${currentUser.uid}/memos`).doc(memo.key)
    .update({
      body: memo.body,
      createdOn: dateTime,
    })
    .catch((error) => {
      console.log(error);
    });
  // 受け取ったコールバック関数にmemoオブジェクトを渡す
  navigation.state.params.onGoBack({ ...memo, createdOn: dateTime });
  navigation.navigate('MemoDetail');
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
    textAlignVertical: 'top',
  },
});
