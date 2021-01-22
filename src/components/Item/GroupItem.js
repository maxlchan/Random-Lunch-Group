import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NameItem from './NameItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  min-height: 200px;
  padding: 10px;
  margin: 10px;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.whiteBlue};
  box-shadow: ${({ theme }) => theme.boxShadows.deep};
`;

const GroupName = styled.h1`
  display: flex;
  align-items: center;
  width: 90%;
  height: 5vh;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;

const GroupMembersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const GroupItem = ({ index, groupMembers }) => {
  console.log(groupMembers);
  return (
    <Wrapper>
      <GroupName>{index}조</GroupName>
      <GroupMembersWrapper>
        {groupMembers.map((groupMember) => (
          <NameItem key={groupMember._id} name={groupMember.name} />
        ))}
      </GroupMembersWrapper>
    </Wrapper>
  );
};

GroupItem.propTypes = {
  index: PropTypes.number.isRequired,
  groupMembers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  )
};

export default GroupItem;
