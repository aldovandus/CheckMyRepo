import React from 'react';
import {useSelector} from 'react-redux';
import {selectIsConnected} from '../../redux/selectors/get-is-connected';
import {StyleSheet, Text} from 'react-native';
import {selectError} from '../../redux/selectors/get-error';

const ErrorText = () => {
  const isConnected = useSelector(selectIsConnected);
  const error = useSelector(selectError);

  if (error === 404) {
    return (
      <Text style={styles.title}>
        <>
          Check your <Text style={styles.textBold}>username</Text> or your{' '}
          <Text style={styles.textBold}>repository</Text> name{' '}
        </>
      </Text>
    );
  }

  if (!isConnected) {
    return (
      <Text style={styles.title}>
        <>
          Check your <Text style={styles.textBold}>internet connection</Text>
        </>
      </Text>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'OpenSans-Regular',
    color: '#000',
    fontSize: 30,
    marginTop: 20,
  },
  textBold: {
    fontWeight: 'bold',
  },
});
export {ErrorText};
