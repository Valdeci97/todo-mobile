import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  filter: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-evenly',
    width: '100%',
  },
  filterActive: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  filterInactive: {
    color: '#99AAEA',
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.4
  }
});

export default style;
