import React from 'react';
import { Platform } from 'react-native';

import AndroidInput from './android';
import IosInput from './ios';

export default function TimeComponent({ type }) {
  return (
    Platform.OS === 'ios' ? <IosInput type={ type } /> : <AndroidInput type={ type } />
  );
};
