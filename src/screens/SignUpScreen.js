import React, { useState } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        メンバー登録
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setPassword(value)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableHighlight style={styles.button} onPress={() => { handleSubmit(email, password, navigation); }} underlayColor="#C70F66">
        <Text style={styles.buttonTitle}>送信する</Text>
      </TouchableHighlight>
    </View>
  );
}

SignUpScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

function handleSubmit(email, password, navigation) {
  // sign up
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' }),
        ],
      });
      navigation.dispatch(resetAction);
      navigation.navigate('Home');
    })
    .catch((error) => {
      console.log(error, email, password);
    });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#ddd',
    height: 48,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#DDD',
    padding: 8,
  },
  title: {
    fontSize: 32,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});
