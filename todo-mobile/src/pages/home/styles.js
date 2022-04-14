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
  },
  scroll: {
    width: '90%'
  },
  taskTitleArea: {
    alignItems: 'center',
    borderBottomColor: '#2A5AF2',
    borderBottomWidth: 2,
    width: '100%',
  },
  taskTitle: {
    backgroundColor: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    position: 'relative',
    top: 10,
  }
});

export default style;
