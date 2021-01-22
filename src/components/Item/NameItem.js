import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  height: 30px;
  margin: 5px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.orange};
  box-shadow: ${({ theme }) => theme.boxShadows.default};
  border-radius: 20px;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  user-select: none;

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const NameItem = ({ name, children }) => {
  return (
    <Wrapper>
      <span>{name}</span>
      {children}
    </Wrapper>
  );
};

NameItem.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default NameItem;
