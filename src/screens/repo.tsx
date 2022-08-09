import {useFocusEffect} from '@react-navigation/native';
import React, {useRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {MyButton} from '../components/MyButton';
import {setRepoName} from '../redux/reducers/repository';
import {store} from '../redux/store';

const RepoScreen = ({navigation}: any) => {
  const dispatch = useDispatch();

  const textInputRef = useRef<TextInput>(null);

  const currentText = useRef<string>('');

  const onPress = () => {
    dispatch(setRepoName(currentText.current));
    navigation.goBack();
  };

  useFocusEffect(() => {
    textInputRef.current?.focus();
    const repolink = store.getState().RepositoryReducer.repoName;

    if (repolink) {
      currentText.current = repolink;
      textInputRef.current?.setNativeProps({
        text: repolink,
      });
    }
  });

  return (
    <View style={styles.container}>
      <TextInput
        ref={textInputRef}
        onChangeText={text => {
          currentText.current = text;
        }}
        style={styles.text}
        underlineColorAndroid="black"
        placeholder="Type your repository name"
      />

      <MyButton title="done" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
});

export {RepoScreen};
