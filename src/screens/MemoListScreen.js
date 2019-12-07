import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

// navigation.navigate('MemoEdit');
export default function MemoListScreen(props) {
  const { navigation } = props;
  const { params } = navigation.state;
  return (
    <View style={styles.container}>
      <MemoList navigation={navigation} />
      <CircleButton name="plus" onPress={() => { handlePress(params, navigation); }} />
    </View>
  );
}

function handlePress(params, navigation) {
  navigation.navigate('MemoCreate', params);
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
