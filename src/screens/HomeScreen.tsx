import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { Button } from '../styles/buttons';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToQuiz = () => {
    navigation.navigate('Quiz');
  };

  return (
    <>
      <Text>Home Screen</Text>
      <Button onPress={goToQuiz} text='Go To Quiz' />
    </>
  );
};

export default HomeScreen;
