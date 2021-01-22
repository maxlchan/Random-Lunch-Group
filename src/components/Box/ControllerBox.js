import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
  min-width: 250px;
  height: 100%;
  min-height: 550px;
  position: sticky;
  top: 20px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${({ theme }) => theme.colors.whiteBlue};
  box-shadow: ${({ theme }) => theme.boxShadows.deep};
`;

const ControllerBox = ({ name, children }) => {
  return (
    <Wrapper>
      <h1>{name}</h1>
      {children}
    </Wrapper>
  );
};

ControllerBox.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
};

export default ControllerBox;
