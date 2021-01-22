import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.span`
  position: absolute;
  top: -7px;
  right: -7px;
  font-size: 15px;

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
  }

  return <Button onClick={handleButtonClick}>❌</Button>;
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
