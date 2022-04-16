import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';

import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './styles';
import typeIcons from '../../utils/typeIcons';
import DateInput from '../../components/dateTime';
import validateTask from '../../utils/validateTask';
import { createTask } from '../../services';
import redirect from '../../utils/redirect';

export default function Task({ navigation }) {
  const [done, setDone] = useState(false);
  const [type, setType] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');

  const saveTask = async () => {
    const task = { macaddress, type, title, description, date, hour }
    const result = validateTask(task);
    if (result.message) { return Alert.alert(result.message); }
    const { error } = await createTask(task);
    if (error) { return Alert.alert(error); }
    redirect(navigation, 'Home');
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header showBack={true}  navigation={ navigation } />
        <ScrollView style={{ width: '100%' }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {typeIcons.map((icon, index) => icon &&
              <TouchableOpacity key={index} onPress={() => setType(index)}>
                <Image source={icon} style={[styles.icon, type !== index && styles.inactive]} />
              </TouchableOpacity>
            )}
          </ScrollView>
          <View>
            <Text style={styles.text}>Título</Text>
            <TextInput
              maxLength={25}
              placeholder="Título da tarefa"
              style={styles.input}
              onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.text}>Detalhes</Text>
            <TextInput
              maxLength={200}
              placeholder="Detalhes"
              multiline={true}
              style={styles.details}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <DateInput type="date" save={ setDate } />
          <DateInput save={ setHour } />
          <View style={styles.doneDeleteContainer}>
            <View style={styles.done}>
              <Switch
                onValueChange={() => setDone(!done)}
                value={ done }
                thumbColor={ done ? '#00FF60' : '#FFA940' }
              />
              <Text style={styles.switchText}>Concluído</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.delete}>Excluir</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
      <Footer showSave="save" saveTask={ saveTask } />
    </KeyboardAvoidingView>
  );
};
