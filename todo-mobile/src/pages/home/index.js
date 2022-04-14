import React from 'react';
import { Text, View } from 'react-native';

import style from './styles';
import Header from '../../components/header';

export default function Home() {
  return (
    <View style={ style.container }>
      <Header showNotification={ true } showBack={ false } />
    </View>
  );
};
