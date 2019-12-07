import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';
import '@firebase/firestore';
import PropTypes from 'prop-types';

import CircleButton from '../elements/CircleButton';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const { params } = navigation.state;
  const [body, setBody] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.memoEditInput}
        multiline
        onChangeText={(value) => { setBody(value); }}
      />
      <CircleButton name="check" onPress={() => { handleSubmit(body, navigation, params); }} />
    </View>
  );
}

function handleSubmit(bodyText, navigation, params) {
  const db = firebase.firestore();
  db.collection(`users/${params.user.uid}/memos`).add({
    body: bodyText,
    createdOn: new Date(),
  })
    .then((docRef) => {
      console.log(docRef);
    })
    .catch((error) => {
      console.log(error);
    });
}

MemoCreateScreen.propTypes = {
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
  },
});
