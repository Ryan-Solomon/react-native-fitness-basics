import React from 'react';
import { View, Text } from 'react-native';
import { Button } from './../styles/buttons';
import styled from 'styled-components/native';
import { StyledBackgroundContainer } from './../styles/backgrounds';

const QuizScreen = () => {
  return (
    <StyledBackgroundContainer>
      <StyledButtonContainer>
        <Button borderRadius='6px' width='80vw' text='Beginner' />
        <Button borderRadius='6px' width='80vw' text='Intermediate' />
        <Button borderRadius='6px' width='80vw' text='Advanced' />
      </StyledButtonContainer>
    </StyledBackgroundContainer>
  );
};

export default QuizScreen;

// Styles

const StyledButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;
