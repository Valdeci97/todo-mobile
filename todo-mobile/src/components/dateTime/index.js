import React from 'react';
import { Platform } from 'react-native';

import AndroidInput from './android';
import IosInput from './ios';

export default function TimeComponent({ type, save }) {
  return (
    Platform.OS === 'ios' ? <IosInput type={ type } save={ save } />
      : <AndroidInput type={ type } save={ save } />
  );
};
