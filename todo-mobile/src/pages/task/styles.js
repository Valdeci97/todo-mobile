import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    height: 50,
    marginHorizontal: 8,
    marginVertical: 5,
    width: 50,
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    paddingHorizontal: 5,
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    fontSize: 20,
    marginHorizontal: 5,
    padding: 10,
    width: '95%',
  },
  details: {
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 20,
    height: 80,
    marginHorizontal: 5,
    padding: 10,
    textAlignVertical: 'top',
    width: '95%',
  },
  doneDeleteContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  done: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 6,
  },
  switchText: {
    color: '#2A5AF2',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  delete: {
    color: '#FDA90A',
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight: 15,
  }
});

export default styles;
