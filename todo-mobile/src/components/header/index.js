import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import logo from '../../assets/logo-light.png';
import bell from '../../assets/bell-light.png';
import qrcode from '../../assets/qrcode.png';
import arrow from '../../assets/arrow.png';

export default function Header({ showNotification, showBack }) {
  return (
    <View style={ styles.header }>
      {
        showBack ? 
          <TouchableOpacity style={ styles.arrowContainer }>
            <Image source={ arrow } style={ styles.arrow } />
          </TouchableOpacity> :
          <TouchableOpacity style={ styles.qrContainer }>
            <Image source={ qrcode } style={ styles.qrcode } />
          </TouchableOpacity>
      }
      <Image source={ logo } style={ styles.logo } />
      { showNotification &&
        <TouchableOpacity style={ styles.notification }>
          <Image source={ bell } style={ styles.notificationBell } />
          <View style={ styles.notificationEllipse }>
            <Text style={ styles.notificationText }>3</Text>
          </View>
        </TouchableOpacity>
      }
    </View>
  );
};
