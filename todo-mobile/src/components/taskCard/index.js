import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';

import styles from './styles';
import typeIcons from '../../utils/typeIcons';
import redirect from '../../utils/redirect';
import { getTaskById } from '../../services';

export default function TaskCard({ type, title, when, done, navigation, id}) {
  const sendTaskInfo = async (id) => {
    redirect(navigation, 'Task', id)
  }

  return (
    <View style={ styles.container }>
      <TouchableOpacity
        style={ [styles.card, done && styles.done] }
        onPress={() => sendTaskInfo(id)}
      >
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
