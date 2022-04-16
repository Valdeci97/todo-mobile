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
} from 'react-native';

import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './styles';
import typeIcons from '../../utils/typeIcons';
import DateInput from '../../components/dateTime';

export default function Task() {
  const [done, setDone] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header showBack={true} />
        <ScrollView style={{ width: '100%' }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {typeIcons.map((icon, index) => icon &&
              <TouchableOpacity key={index}>
                <Image source={icon} style={styles.icon} />
              </TouchableOpacity>
            )}
          </ScrollView>
          <View>
            <Text style={styles.text}>Título</Text>
            <TextInput maxLength={25} placeholder="Título da tarefa" style={styles.input} />
            <Text style={styles.text}>Detalhes</Text>
            <TextInput
              maxLength={200}
              placeholder="Detalhes"
              multiline={true}
              style={styles.details} />
          </View>
          <DateInput type="date" />
          <DateInput />
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
      <Footer showSave="save" />
    </KeyboardAvoidingView>
  );
};
