import React from 'react';
import { shallow } from 'enzyme';
import GroupItem, { GroupName } from './GroupItem';
import NameItem from './NameItem';

describe('<GroupItem>', () => {
  const mockData = [
    { _id: '600acc764969250bfe3ce42b', name: '김찬중' },
    { _id: '600acc794969250bfe3ce42c', name: '신다희' },
    { _id: '600accc54969250bfe3ce436', name: '하지현' },
  ];

  const mockProps = {
    index: 3,
    groupMembers: mockData,
  };

  const wrapper = shallow(<GroupItem {...mockProps} />);

  it('should renders correctly depended on props', () => {
    console.log(wrapper.find(GroupName));
    expect(wrapper.find(GroupName).text()).toEqual(`${mockProps.index}조`);
  });

  it('should render NameItem component by groupMember props', () => {
    expect(wrapper.find(NameItem)).toHaveLength(mockData.length);
  });
});
