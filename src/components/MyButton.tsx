import React from 'react';

import {Text, Pressable, StyleSheet} from 'react-native';

interface Props {
  title: string;
  onPress?: () => void;
}

const MyButton = ({title, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: '#000',
  },
});

export {MyButton};
