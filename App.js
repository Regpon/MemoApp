import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ENV from './env_v2.json';

const firebaseConfig = {
  apiKey           : ENV.FIREBASE_API_KEY,
  authDomain       : ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL      : ENV.FIREBASE_DB_URL,
  projectId        : ENV.FIREBASE_PROJECT_ID,
  storageBucket    : ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  appId            : ENV.FIREBASE_APP_ID,
  measurementId    : ENV.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const App = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: MemoListScreen,
  },
  MemoCreate: {
    screen: MemoCreateScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  },
  MemoDetail: {
    screen: MemoDetailScreen,
  },
  MemoEdit: {
    screen: MemoEditScreen,
  },
}, {
  defaultNavigationOptions: {
    headerTitle: 'MEMOT',
    headerStyle: {
      backgroundColor: '#265366',
      textAlign: 'center',
    },
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default createAppContainer(App);
