import React from 'react';
import { shallow } from 'enzyme';
import ControllerBox from './ControllerBox';

describe('<ControllerBox>', () => {
  const mockProps = {
    name: '옵션',
  };
  const wrapper = shallow(
    <ControllerBox {...mockProps}>
      <span>test</span>
    </ControllerBox>
  );

  it('should renders correctly depended on props', () => {
    expect(wrapper.find('h1').text()).toEqual(mockProps.name);
  });

  it('should render children correctly', () => {
    expect(wrapper.find('span').text()).toEqual('test');
  });
});
