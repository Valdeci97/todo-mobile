import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 8,
    width: '90%',
  },
  card: {
    borderRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    height: 65,
    justifyContent: 'space-between',
    shadowColor: '#111',
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  leftCard: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    height: 50,
    marginLeft: 5,
    width: 50,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  rightCard: {
    justifyContent: 'center',
  },
  date: {
    color: '#2A5AF2',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  time: {
    color: '#2A5AF2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  done: {
    borderRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    height: 65,
    justifyContent: 'space-between',
    opacity: 0.5,
  }
});

export default styles;
