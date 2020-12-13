import React from 'react';
import { View, Text } from 'react-native';

import { Button } from './../styles/buttons';
import styled from 'styled-components/native';

const QuizScreen = () => {
  return (
    <View>
      <StyledTitle>Choose Difficulty</StyledTitle>

      <StyledButtonContainer>
        <Button borderRadius='6px' width='80vw' text='Beginner' />
        <Button borderRadius='6px' width='80vw' text='Intermediate' />
        <Button borderRadius='6px' width='80vw' text='Advanced' />
      </StyledButtonContainer>
    </View>
  );
};

export default QuizScreen;

// Styles

const StyledTitle = styled.Text`
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem 0;
`;

const StyledButtonContainer = styled.View`
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;
`;
