import React, { useState } from 'react';
import { TouchableOpacity, Image, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import styles from './styles';
import calendar from '../../assets/androidCalendar.png';
import clock from '../../assets/androidClock.png';

export default function AndroidInput({ type }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date'); 

  const handleChange = (_event, selectedDate) => {
    if (type === 'date') {
      setShow(false);
      setDate(format(selectedDate, 'dd/MM/yyyy'));
    } else {
      setShow(false);
      setTime(format(selectedDate, 'HH:mm'));
    }
  };

  const selectDateOrTime = () => {
    if (type === 'date') {
      setShow(true);
      setMode('date');
    } else {
      setShow(true);
      setMode('time');
    }
  }

  return (
    <TouchableOpacity onPress={ selectDateOrTime }>
      <TextInput
        editable={ false }
        value={ type === 'date' ? date : time }
        placeholder={ type === 'date' ? 'Selecione a data' : 'Selecione a hora' }
        style={ styles.input }
      />
      <Image source={ type === 'date' ? calendar : clock } style={ styles.icon } />
      {
        show &&
        <DateTimePicker
          display='default' 
          value={ new Date() }
          is24Hour={ true }
          mode={ mode }
          onChange={ handleChange }
          minimumDate={ new Date() }
        />
      }
    </TouchableOpacity>
  );
};
