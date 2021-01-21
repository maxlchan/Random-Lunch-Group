import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  min-width: 300px;
  height: 75%;
  min-height: 250px;
`;

const GroupItemBox = ({ children }) => {
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

export default GroupItemBox;
