import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  height: 30px;
  margin: 5px;
  position: relative;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.orange};
  box-shadow: ${({ theme }) => theme.boxShadows.default};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: white;
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
