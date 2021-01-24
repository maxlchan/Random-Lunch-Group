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

  &:hover {
    animation: shake 1.5s;
    animation-iteration-count: infinite;
  }

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -1px) rotate(-1deg); }
    20% { transform: translate(-2px, 0px) rotate(1deg); }
    30% { transform: translate(2px, 1px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-1px, -1px) rotate(-1deg); }
    70% { transform: translate(-2px, 0px) rotate(1deg); }
    80% { transform: translate(2px, 1px) rotate(0deg); }
    90% { transform: translate(1px, -1px) rotate(1deg); }
    100% { transform: translate(-1px, 2px) rotate(-1deg); }
  }

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
