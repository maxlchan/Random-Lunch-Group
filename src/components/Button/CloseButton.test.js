import React from 'react';
import { shallow } from 'enzyme';
import CloseButton from './CloseButton';

describe('<CloseButton>', () => {
  const onClickMock = jest.fn();
  const mockProps = {
    onClick: onClickMock,
    id: '123123123',
  };

  const wrapper = shallow(<CloseButton {...mockProps} />);

  it('should call function provided with by id when clicked', () => {
    wrapper.simulate('click');
    expect(onClickMock).toBeCalledWith(mockProps.id);
  });
});
