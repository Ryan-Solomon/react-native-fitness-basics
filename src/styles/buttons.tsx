import { FC } from 'react';
import styled from 'styled-components/native';
import React from 'react';

// styles

type TButtonProps = {
  buttonColor: string;
  width: string;
  borderRadius: string;
};

const StyledButton = styled.TouchableOpacity<TButtonProps>`
  background: #333;
  color: ${(props) => props.buttonColor};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);
`;

type TTextProps = {
  textColor: string;
  fontSize: string;
};

const StyledButtonText = styled.Text<TTextProps>`
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
  padding: 1rem 0.5rem;
  text-align: center;
`;

// Types
type TProps = {
  text: string;
  onPress?: () => void;
  buttonColor?: string;
  textColor?: string;
  fontSize?: string;
  width?: string;
  borderRadius?: string;
};

// Component

export const Button: FC<TProps> = ({
  text,
  buttonColor = '#333',
  textColor = '#fff',
  fontSize = '20px',
  width = '100vw',
  borderRadius = '0px',
  onPress,
}) => {
  return (
    <StyledButton
      borderRadius={borderRadius}
      onPress={onPress}
      width={width}
      buttonColor={buttonColor}
    >
      <StyledButtonText textColor={textColor} fontSize={fontSize}>
        {text}
      </StyledButtonText>
    </StyledButton>
  );
};
