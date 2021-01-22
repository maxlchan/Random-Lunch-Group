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

GroupItemBox.propTypes = {
  children: PropTypes.node,
};

export default GroupItemBox;
