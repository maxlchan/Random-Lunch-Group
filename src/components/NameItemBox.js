import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, minmax(70px, 1fr));
  grid-auto-rows: minmax(10px, minmax(70px, 1fr));
  row-gap: 10px;

`;

const NameItemBox = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
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

export default NameItemBox;
