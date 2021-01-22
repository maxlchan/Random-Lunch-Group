import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
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

const Button = ({ onClick, color, text }) => {
  return (
    <Wrapper onClick={onClick} color={color}>
      <span>{text}</span>
    </Wrapper>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
