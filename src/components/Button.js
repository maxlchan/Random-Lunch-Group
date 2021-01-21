import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.default};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  cursor: pointer;
  color: white;
  background-color: ${({ color, theme }) => {
    return color || theme.colors.darkBlue;
  }};

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }

  span {
    min-width: 25px;
    pointer-events: none;
  }
`;

const Button = ({
  id,
  className,
  disabled,
  onClick,
  color,
  width,
  padding,
  text,
}) => {
  return (
    <Wrapper
      id={id}
      className={className}
      disabled={disabled}
      onClick={onClick}
      color={color}
      width={width}
      padding={padding}
    >
      <span>{text}</span>
    </Wrapper>
  );
};

export default Button;
