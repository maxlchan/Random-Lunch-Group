import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.span`
  position: absolute;
  top: -7px;
  right: -7px;

  &:hover {
    transform: scale(1.5);
  }
`;

const CloseButton = ({ onClick }) => {
  return <Button onClick={onClick}>❌</Button>;
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
