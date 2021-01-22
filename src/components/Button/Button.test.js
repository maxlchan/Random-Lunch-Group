import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button>', () => {
  const onClickMock = jest.fn();
  const mockProps = {
    onClick: onClickMock,
    color: 'yellow',
    text: 'button',
  };

  const wrapper = shallow(<Button {...mockProps} />);

  it('should renders correctly depended on props', () => {
    expect(wrapper.find('span').text()).toEqual(mockProps.text);
  });

  it('should have proper props', () => {
    expect(wrapper.prop('color')).toEqual(mockProps.color);
  });

  it('should call function provided by prop when clicked', () => {
    wrapper.simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
