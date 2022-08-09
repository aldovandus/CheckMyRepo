import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

interface Props {
  children: React.ReactNode;
}

const HomeContainer = ({children}: Props) => {
  const {error, isChecked} = useSelector(
    (state: RootState) => state.RepositoryReducer,
  );
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: error ? '#FFACAC' : isChecked ? '#CAFFDA' : '#fff',
        },
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export {HomeContainer};
