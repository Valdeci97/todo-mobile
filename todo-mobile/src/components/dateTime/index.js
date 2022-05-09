import React from 'react';
import { Platform } from 'react-native';

import AndroidInput from './android';
import IosInput from './ios';

export default function TimeComponent({ type, save, taskDate, taskHour, id }) {
  return (
    Platform.OS === 'ios' ?
      <IosInput
        type={ type }
        save={ save }
        taskDate={ taskDate }
        taskHour={ taskHour }
      /> :
      <AndroidInput
        type={ type }
        save={ save }
        taskDate={ taskDate }
        taskHour={ taskHour }
        id={ id }
      />
  );
};
