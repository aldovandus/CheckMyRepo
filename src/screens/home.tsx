import React, {useCallback} from 'react';
import {Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {UserText} from '../components/home/user';
import {RepoText} from '../components/home/repo';
import {Buttons} from '../components/home/buttons';
import {HomeContainer} from '../components/home/container';
import {selectIsSent} from '../redux/selectors/get-is-sent';
import {RepositorySent} from '../components/home/repository-sent';
import {ErrorText} from '../components/home/error';

const HomeScreen = ({navigation}: any) => {
  const isSent = useSelector(selectIsSent);

  const onUserPress = useCallback(() => {
    navigation.navigate('User');
  }, [navigation]);

  const onRepoPress = useCallback(() => {
    navigation.navigate('Repo');
  }, [navigation]);

  if (isSent) {
    return <RepositorySent />;
  }

  return (
    <HomeContainer>
      <Text style={styles.title}>Set the repository address</Text>

      <Text style={styles.githubText}>github.com</Text>
      <UserText onPress={onUserPress} />

      <RepoText onPress={onRepoPress} />

      <ErrorText />
      <Buttons />
    </HomeContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'OpenSans-Regular',
  },
  githubText: {
    marginTop: 20,
    fontSize: 35,
    color: '#000',
    fontFamily: 'OpenSans-regular',
  },
});

export {HomeScreen};
