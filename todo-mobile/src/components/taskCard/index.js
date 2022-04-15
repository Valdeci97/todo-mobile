import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';

import styles from './styles';
import typeIcons from '../../utils/typeIcons';

export default function TaskCard({ type, title, when, done }) {
  return (
    <View style={ styles.container }>
      <TouchableOpacity style={ [styles.card, done && styles.done] }>
        <View style={ styles.leftCard }>
          <Image source={ typeIcons[type] } style={ styles.icon } />
          <Text style={ styles.taskTitle }>{ title }</Text>
        </View>
        <View style={ styles.rightCard }>
          <Text style={ styles.date }>{ format(new Date(when), 'dd/MM/yyyy') }</Text>
          <Text style={ styles.time }>{ format(new Date(when), 'HH:mm') }</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
