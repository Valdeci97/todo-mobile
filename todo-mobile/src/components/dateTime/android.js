import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import styles from './styles';
import calendar from '../../assets/androidCalendar.png';
import clock from '../../assets/androidClock.png';

export default function AndroidInput({ type, save, taskDate, taskHour, id }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  useEffect(() => {
    console.log(taskDate);
    console.log(id, 'id');
    // verificar o motivo de as propriedades estarem chegando vazias aqui no container.
  }, []);

  const handleChange = (_event, selectedDate) => {
    if (type === 'date') {
      setShow(false);
      setDate(format(selectedDate, 'dd/MM/yyyy'));
      save(format(selectedDate, 'yyyy-MM-dd'));
    } else {
      setShow(false);
      setTime(format(selectedDate, 'HH:mm'));
      save(format(selectedDate, 'HH:mm:ss.SSS'));
    }
  };

  const selectDateOrTime = () => {
    if (type === 'date') {
      console.log(taskDate);
      setShow(true);
      setMode('date');
      setDate(taskDate || '');
    } else {
      setShow(true);
      setMode('time');
      setTime(taskHour || '');
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
