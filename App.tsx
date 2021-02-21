import React from 'react';
import {ScrollView, View} from 'react-native';
import Style from './components/Style';
import Header from './components/Header';
import TodoList from './components/TodoList';

export default function App(){
  return (
    <View style={Style.container}>
      <Header />
      <TodoList />
    </View>
  );
}
