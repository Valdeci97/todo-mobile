import { Platform } from 'react-native';
import * as Application from 'expo-application';

export default async function getDeviceId() {
  if (Platform.OS === 'ios') {
    const id = await Application.getIosIdForVendorAsync()
    return id;
  }
  return Application.androidId;
}
