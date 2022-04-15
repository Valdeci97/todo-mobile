import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text, ScrollView,
  ActivityIndicator,
} from 'react-native';

import style from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import TaskCard from '../../components/taskCard';
import { getTasks } from '../../services';

const options = ['Todos', 'Hoje', 'Semana', 'Mês', 'Ano'];

export default function Home() {
  const [isActive, setIsActive] = useState('Todos');
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTasks(isActive).then((response) =>
      setTasks(response),
      setIsLoading(false)
    );
  }, [isActive])

  const bellHandler = () => setIsActive('late');

  return (
    <View style={ style.container }>
      <Header showNotification={ true } showBack={ false } bellClick={ bellHandler } />
      <View style={ style.filter }>
        {
          options.map((option, index) =>
            <TouchableOpacity onPress={() => setIsActive(option)} key={ index }>
            <Text style={ isActive === option ? style.filterActive : style.filterInactive }>
                { option }
              </Text>
            </TouchableOpacity>
          )
        }
      </View>
      <View style={ style.taskTitleArea }>
        <Text style={ style.taskTitle } >Tarefas { isActive === 'late' && 'Atrasadas' }</Text>
      </View>
      <ScrollView style={ style.scroll } contentContainerStyle={ { alignItems: 'center' } }>
        {
          isLoading ? <ActivityIndicator size={ 40 } color='#2A5AF2' />
          : tasks.map(({ type, title, when, done, _id }) =>
            <TaskCard title={ title } done={ done } key={ _id } when={ when } type={ type } />
          )
        }
      </ScrollView>
      <Footer showSave={ 'add' } />
    </View>
  );
};
