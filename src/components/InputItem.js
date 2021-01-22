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

const InputItem = ({
  type,
  content,
  value,
  onChange,
  onKeyPress,
  placeholder,
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') onKeyPress();
  };

  return (
    <Wrapper>
      <label htmlFor={content}>{content}</label>
      <input
        type={type}
        id={content}
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        autoFocus
        spellCheck='false'
        autoComplete='off'
      />
    </Wrapper>
  );
};

InputItem.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputItem;
