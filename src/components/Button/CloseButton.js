import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 15px;
  background-color: transparent;
  &:hover {
    transform: scale(1.5);
  }
`;

const CloseButton = ({ onClick, id }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    if (isClicked) return;

    onClick(id);
    setIsClicked(true);
  };

  return (
    <Button onClick={handleButtonClick} >
      <span role="img" aria-label='close-button'>❌</span>
    </Button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
