/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  View,
  StatusBar,
  Text,
  TouchableHighlight,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';

enableScreens();

const RootStack = createNativeStackNavigator();

const StackA = createNativeStackNavigator();

const DummyComponent1 = () => {
  const nav = useNavigation();

  return (
    <View>
      <Text>Screen 1</Text>
      <FlatList
        horizontal
        renderItem={({index}) => {
          return (
            <TouchableHighlight onPress={() => nav.navigate('Screen2')}>
              <Text>Press me</Text>
            </TouchableHighlight>
          );
        }}
        data={Array(1).fill(1, 1, 1)}
      />
    </View>
  );
};
const DummyComponent2 = () => {
  const nav = useNavigation();
  return (
    <View>
      <Text>Screen 2</Text>
      <FlatList
        horizontal
        renderItem={({index}) => {
          return (
            <TouchableHighlight onPress={() => nav.navigate('Screen1')}>
              <Text>Now Press me</Text>
            </TouchableHighlight>
          );
        }}
        data={Array(1).fill(1, 1, 1)}
      />
    </View>
  );
};

const Stack = () => {
  return (
    <StackA.Navigator
      initialRouteName="Screen1"
      screenOptions={{headerShown: false, hideKeyboardOnSwipe: true}}>
      <StackA.Screen name="Screen1" component={DummyComponent1} />
      <StackA.Screen name="Screen2" component={DummyComponent2} />
    </StackA.Navigator>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          borderWidth: 1,
        }}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <RootStack.Navigator
          initialRouteName="ScreensA"
          screenOptions={{headerShown: false, hideKeyboardOnSwipe: true}}>
          <RootStack.Screen component={Stack} name="stack" />
          {/* <RootStack.Screen component={ScreensB} name="ScreensB" /> */}
        </RootStack.Navigator>
      </View>
    </NavigationContainer>
  );
}

export default App;