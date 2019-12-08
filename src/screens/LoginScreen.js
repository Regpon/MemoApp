import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import * as SecureStore from 'expo-secure-store';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Loading from '../elements/Loading';

export default function LoginScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getCacheUserAuth(navigation, setLoading);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} text="ログイン中..." />
      <Text style={styles.title}>
        ログイン
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(value) => setPassword(value)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableHighlight style={styles.button} onPress={() => { handleSubmit(email, password, navigation, setLoading); }} underlayColor="#C70F66">
        <Text style={styles.buttonTitle}>ログインする</Text>
      </TouchableHighlight>

      <TouchableOpacity style={styles.signup} onPress={() => { handlePressRegistor(navigation); }}>
        <Text style={styles.signupText}>メンバー登録する</Text>
      </TouchableOpacity>
    </View>
  );
}

async function getCacheUserAuth(navigation, setLoading) {
  const email = await SecureStore.getItemAsync('email');
  const password = await SecureStore.getItemAsync('password');
  if (email != null || password != null) {
    login(email, password, navigation, setLoading);
  }
}

function handleSubmit(email, password, navigation, setLoading) {
  login(email, password, navigation, setLoading);
}

function login(email, password, navigation, setLoading) {
  setLoading(true);
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      SecureStore.setItemAsync('email', email);
      SecureStore.setItemAsync('password', password);
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
      setLoading(false);
      console.log(error);
    });
}

function handlePressRegistor(navigation) {
  navigation.navigate('SignUp');
}

LoginScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

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
  signup: {
    marginTop: 16,
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 16,
  },
});
