import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MyButton} from '../MyButton';

const RepositorySent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All done! Repository sent.</Text>
      <MyButton title={'cool'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    color: '#000',
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
});

export {RepositorySent};
