import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#99AAEA',
    borderTopColor: '#25040c',
    borderTopWidth: 5,
    bottom: 0,
    height: 70,
    position: 'absolute',
    width: '100%'
  },
  button: {
    position: 'relative',
    top: -70,
  },
  image: {
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'relative',
    top: -40,
  }
});

export default styles;
