import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';

import style from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import TaskCard from '../../components/taskCard';

const options = ['Todos', 'Hoje', 'Semana', 'Mês', 'Ano'];

export default function Home() {
  const [isActive, setIsActive] = useState('Todos');

  return (
    <View style={ style.container }>
      <Header showNotification={ true } showBack={ false } />
      <View style={ style.filter }>
        {
          options.map((option) =>
            <TouchableOpacity onPress={() => setIsActive(option)}>
            <Text style={ isActive === option ? style.filterActive : style.filterInactive }>
                { option }
              </Text>
            </TouchableOpacity>
          )
        }
      </View>
      <View style={ style.taskTitleArea }>
        <Text style={ style.taskTitle } >Tarefas</Text>
      </View>
      <ScrollView style={ style.scroll } contentContainerStyle={ { alignItems: 'center' } }>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </ScrollView>
      <Footer showSave={ 'add' } />
    </View>
  );
};
