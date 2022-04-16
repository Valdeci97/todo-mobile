import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#99AAEA',
    borderTopColor: '#25040c',
    borderTopWidth: 2,
    bottom: 0,
    height: 70,
    position: 'absolute',
    width: '100%'
  },
  button: {
    position: 'relative',
    top: -30,
    backgroundColor: '#EEE',
    borderRadius: 100,
  },
  image: {
    height: 60,
    width: 60,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'relative',
    top: -25,
  }
});

export default styles;
