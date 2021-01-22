import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(70px, 1fr));
  grid-auto-rows: minmax(10px, minmax(70px, 1fr));
  row-gap: 10px;
  width: 100%;
`;

const NameItemBox = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

NameItemBox.propTypes = {
  children: PropTypes.node,
};

export default NameItemBox;
