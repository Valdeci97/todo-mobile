import React from 'react';
import { Text, View } from 'react-native';

import style from './styles';

export default function Home() {
  return (
    <View style={ style.container }>
      <Text>
        Primeira página com react native.
      </Text>
    </View>
  );
};
