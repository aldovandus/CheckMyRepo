/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {HomeScreen} from './src/screens/home';
import {RepoScreen} from './src/screens/repo';
import {UserScreen} from './src/screens/user';
import {setIsConnected} from './src/redux/reducers/repository';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      const isConnected = store.getState().RepositoryReducer.isConnected;
      if (isConnected !== state.isConnected) {
        store.dispatch(setIsConnected(Boolean(state.isConnected)));
      }
    });

    // Unsubscribe
    return unsubscribe();
  }, []);

  // Subscribe

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="User"
            component={UserScreen}
            options={{
              headerBackImageSource: require('./assets/images/back_icon/back.png'),
              headerShadowVisible: false,
              headerTitle: 'USER',
              headerTitleStyle: {
                fontFamily: 'OpenSans-Regular',
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Repo"
            component={RepoScreen}
            options={{
              headerBackImageSource: require('./assets/images/back_icon/back.png'),
              headerShadowVisible: false,
              headerTitle: 'REPO',
              headerTitleStyle: {
                fontFamily: 'OpenSans-Regular',
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
