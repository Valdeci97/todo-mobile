import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import logo from '../../assets/logo-light.png';
import bell from '../../assets/bell-light.png';
import qrcode from '../../assets/qrcode.png';
import arrow from '../../assets/arrow.png';
import { getLateTasks } from '../../services';
import redirect from '../../utils/redirect';

export default function Header({ showNotification, showBack, bellClick, navigation }) {
  const [late, setLate] = useState(0);

  useEffect(() => {
    getLateTasks().then((res) => setLate(res));
  }, []);

  return (
    <View style={ styles.header }>
      {
        showBack ? 
          <TouchableOpacity
            style={ styles.arrowContainer }
            onPress={() => redirect(navigation, 'Home')}
          >
            <Image source={ arrow } style={ styles.arrow } />
          </TouchableOpacity> :
          <TouchableOpacity style={ styles.qrContainer }>
            <Image source={ qrcode } style={ styles.qrcode } />
          </TouchableOpacity>
      }
      <Image source={ logo } style={ styles.logo } />
      { showNotification && late> 0 &&
        <TouchableOpacity style={ styles.notification } onPress={ bellClick }>
          <Image source={ bell } style={ styles.notificationBell } />
          <View style={ styles.notificationEllipse }>
            <Text style={ styles.notificationText }>{ late }</Text>
          </View>
        </TouchableOpacity>
      }
    </View>
  );
};
