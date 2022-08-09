import {useFocusEffect} from '@react-navigation/native';
import React, {useRef} from 'react';
import {View, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {MyButton} from '../components/MyButton';
import {setUser} from '../redux/reducers/repository';
import {store} from '../redux/store';

const UserScreen = ({navigation}: any) => {
  const dispatch = useDispatch();

  const textInputRef = useRef<TextInput>(null);

  const currentText = useRef<string>('');

  const onPress = () => {
    dispatch(setUser(currentText.current));
    navigation.goBack();
  };

  useFocusEffect(() => {
    textInputRef.current?.focus();
    const user = store.getState().RepositoryReducer.user;

    if (user) {
      currentText.current = user;
      textInputRef.current?.setNativeProps({
        text: user,
      });
    }
  });

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
        paddingHorizontal: 20,
      }}>
      <TextInput
        ref={textInputRef}
        onChangeText={text => {
          currentText.current = text;
        }}
        style={{
          fontSize: 20,
        }}
        underlineColorAndroid="black"
        placeholder="Type your github username"
      />

      <MyButton title="done" onPress={onPress} />
    </View>
  );
};

export {UserScreen};
