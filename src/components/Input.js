import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 100%;
  color: ${({ theme }) => theme.colors.darkBlue};

  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #303c6c;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-top: 15px;
    text-align: center;
  }
`;

const Input = ({ type, content, value, onChange, placeholder }) => {
  return (
    <Wrapper>
      <label htmlFor={content}>{content}</label>
      <input
        type={type}
        id={content}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

// Bullet.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default Input;
