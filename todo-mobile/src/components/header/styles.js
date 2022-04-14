import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    backgroundColor: '#99AAEA',
    borderBottomWidth: 5,
    borderBottomColor: '#25040c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 50,
  },
  notification: {
    position: 'absolute',
    right: 20,
  },
  notificationBell: {
    top: 5,
    height: 35,
    width: 35,
  },
  notificationEllipse: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 100,
    left: 15,
    bottom: 35,
    height: 20,
    width: 20,
  },
  notificationText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  qrContainer: {
    left: 20,
    position: 'absolute',
  },
  qrcode: {
    borderWidth: 1,
    borderColor: '#000',
    height: 30,
    width: 30,
  },
  arrowContainer: {
    left: 20,
    position: 'absolute',
  },
  arrow: {
    height: 30,
    width: 30,
  }
});

export default styles;
