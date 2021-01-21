import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 90px;
  height: 30px;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.orange};
  box-shadow: ${({ theme }) => theme.boxShadows.default};
  border-radius: 20px;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  user-select: none;
`;

const NameItem = ({ name }) => {
  return <Wrapper>{name}</Wrapper>;
};

export default NameItem;
