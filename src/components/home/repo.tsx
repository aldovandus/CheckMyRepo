import React from 'react';
import {Pressable, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectRepoName} from '../../redux/selectors/get-repo-name';
import {styles} from './home-style';

interface Props {
  onPress: () => void;
}

const RepoText = ({onPress}: Props) => {
  const repoName = useSelector(selectRepoName);
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.blackText}>
        <Text style={styles.grayText}>/</Text>
        {repoName}
      </Text>
    </Pressable>
  );
};

export {RepoText};
