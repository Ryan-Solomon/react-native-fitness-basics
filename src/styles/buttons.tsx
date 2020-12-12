import { FC } from 'react';
import styled from 'styled-components/native';
import React from 'react';

// styles

type TButtonProps = {
  buttonColor: string;
  width: string;
};

const StyledButton = styled.TouchableOpacity<TButtonProps>`
  background: #333;
  color: ${(props) => props.buttonColor};
  width: ${(props) => props.width};
`;

type TTextProps = {
  textColor: string;
  fontSize: string;
};

const StyledButtonText = styled.Text<TTextProps>`
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
`;

// Types
type TProps = {
  text: string;
  onPress?: () => void;
  buttonColor?: string;
  textColor?: string;
  fontSize?: string;
  width?: string;
};

// Component

export const Button: FC<TProps> = ({
  text,
  buttonColor = '#333',
  textColor = '#fff',
  fontSize = '16px',
  width = '100vw',
  onPress,
}) => {
  return (
    <StyledButton onPress={onPress} width={width} buttonColor={buttonColor}>
      <StyledButtonText textColor={textColor} fontSize={fontSize}>
        {text}
      </StyledButtonText>
    </StyledButton>
  );
};
