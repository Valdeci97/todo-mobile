import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import defaultIcon from '../../assets/default-task-icon.png';

export default function TaskCard({ done }) {
  return (
    <View style={ styles.container }>
      <TouchableOpacity style={ [styles.card, done && styles.done] }>
        <View style={ styles.leftCard }>
          <Image source={ defaultIcon } style={ styles.icon } />
          <Text style={ styles.taskTitle }>Task text</Text>
        </View>
        <View style={ styles.rightCard }>
          <Text style={ styles.date }>12/10/2023</Text>
          <Text style={ styles.time }>22:45</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
