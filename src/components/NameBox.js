import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../components/Button';

const NameBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.orange};
  box-shadow: ${({ theme }) => theme.boxShadows.default};
  border-radius: 20px;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
`;

const NameBox = ({ name }) => {
  return <NameBoxWrapper>{name}</NameBoxWrapper>;
};

// ChatBox.propTypes = {
//   message: PropTypes.string.isRequired,
//   messages: PropTypes.arrayOf(
//     PropTypes.shape({
//       imageUrl: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       message: PropTypes.string.isRequired,
//       isHost: PropTypes.bool.isRequired,
//       ownerId: PropTypes.string.isRequired,
//     })
//   ),
//   onKeyPress: PropTypes.func.isRequired,
//   onClick: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   memberNumber: PropTypes.number,
//   userId: PropTypes.string.isRequired,
//   isPrivate: PropTypes.bool,
// };

export default NameBox;
