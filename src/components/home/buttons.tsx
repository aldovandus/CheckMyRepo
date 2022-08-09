import axios from 'axios';
import React from 'react';
import {useSelector} from 'react-redux';
import {
  setCheckedStatus,
  setError,
  setIsSent,
} from '../../redux/reducers/repository';
import {selectIsChecked} from '../../redux/selectors/get-is-checked';
import {store} from '../../redux/store';
import {
  checkGithubUsername,
  checkGithubRepository,
} from '../../services/github';
import {MyButton} from '../MyButton';

const Buttons = () => {
  const isChecked = useSelector(selectIsChecked);
  const onCheckPress = async () => {
    const user = store.getState().RepositoryReducer.user;
    const repoName = store.getState().RepositoryReducer.repoName;
    if (user && repoName) {
      try {
        const usernameResponse = await checkGithubUsername(user);

        if (usernameResponse?.status === 200) {
          const repoResponse = await checkGithubRepository(user, repoName);
          if (repoResponse?.status === 200) {
            store.dispatch(setCheckedStatus(true));
          }
        }
      } catch (error: any) {
        store.dispatch(setError(error.response.status));
      }
    }
  };

  const onSendPress = async () => {
    try {
      const user = store.getState().RepositoryReducer.user;
      const repoName = store.getState().RepositoryReducer.repoName;
      const {data} = await axios.post(
        'https://pushmore.io/webhook/i4XfC2Yoq54N5P4PNuXbZVW4',
        {
          repoUrl: `https://github.com/${user}/${repoName}`,
          sender: user,
        },
      );
      if (data === 'OK') {
        store.dispatch(setIsSent(true));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return isChecked ? (
    <MyButton onPress={onSendPress} title={'send'} />
  ) : (
    <MyButton onPress={onCheckPress} title={'check'} />
  );
};

export {Buttons};
