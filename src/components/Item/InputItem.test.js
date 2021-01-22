import React from 'react';
import { shallow } from 'enzyme';
import InputItem from './InputItem';

describe('<InputItem>', () => {
  const onChangeMock = jest.fn();
  const onKeyPressMock = jest.fn();

  const mockProps = {
    type: 'number',
    value: '저는',
    content: '자개소개',
    onChange: onChangeMock,
    onKeyPress: onKeyPressMock,
    placeholder: '자기소개를 적어주세요',
  };

  const wrapper = shallow(<InputItem {...mockProps} />);

  it('should renders correctly depended on props', () => {
    expect(wrapper.find('label').text()).toEqual(mockProps.content);
  });

  it('should have proper props', () => {
    const input = wrapper.find('input');

    expect(input.prop('type')).toEqual(mockProps.type);
    expect(input.prop('value')).toEqual(mockProps.value);
    expect(input.prop('placeholder')).toEqual(mockProps.placeholder);
  });

  it('should call function provided by prop when clicked', () => {
    wrapper.find('input').simulate('change');
    expect(mockProps.onChange).toHaveBeenCalled();
  });

  it('should call onKeyPress function when Enter clicked', () => {
    wrapper.find('input').simulate('keypress', { key: 'z' });
    expect(mockProps.onKeyPress).toHaveBeenCalledTimes(0);

    wrapper.find('input').simulate('keypress', { key: 'f' });
    expect(mockProps.onKeyPress).toHaveBeenCalledTimes(0);

    wrapper.find('input').simulate('keypress', { key: 'Enter' });
    expect(mockProps.onKeyPress).toHaveBeenCalledTimes(1);

    wrapper.find('input').simulate('keypress', { key: 'Enter' });
    expect(mockProps.onKeyPress).toHaveBeenCalledTimes(2);
  });
});
