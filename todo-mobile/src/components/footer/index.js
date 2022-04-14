import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import add from '../../assets/add-task-icon.png';
import save from '../../assets/save-task-icon.png';
import styles from './styles';

export default function Footer({ showSave }) {
  return (
    <View style={ styles.container }>
      <TouchableOpacity style={ styles.button }>
        <Image source={ showSave === 'save' ? save : add } style={ styles.image } />
      </TouchableOpacity>
      <Text style={ styles.text }>Organizando sua vida</Text>
    </View>
  );
};
