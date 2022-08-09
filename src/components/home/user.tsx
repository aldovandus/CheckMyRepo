import React from 'react';
import {Pressable, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUser} from '../../redux/selectors/get-user';
import {styles} from './home-style';

interface Props {
  onPress: () => void;
}

const UserText = ({onPress}: Props) => {
  const user = useSelector(selectUser);
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.blackText}>
        <Text style={styles.grayText}>/</Text>
        {user}
      </Text>
    </Pressable>
  );
};

export {UserText};
