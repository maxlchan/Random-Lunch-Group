import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NameItem from './NameItem';
// import useScrollToBottom from '../hooks/useScrollToBottom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  min-height: 200px;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.whiteBlue};
  box-shadow: ${({ theme }) => theme.boxShadows.deep};
  padding: 10px;
  margin: 10px;
`;

const GroupName = styled.h1`
  display: flex;
  align-items: center;
  width: 90%;
  height: 5vh;
  border-bottom: 1px solid black;
  margin-bottom: 10px
`;

const GroupMembersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const GroupItem = ({ index, memberNames }) => {
  // const messagesEndRef = useScrollToBottom(messages);
  return (
    <Wrapper>
      <GroupName>{index}조</GroupName>
      <GroupMembersWrapper>
        {memberNames.map((memberName) => (
          <NameItem name={memberName} />
        ))}
      </GroupMembersWrapper>
    </Wrapper>
  );
};

// ChatBox.propTypes = {
//   message: PropTypes.string.isRequired,
//   messages: PropTypes.arrayOf(
//     PropTypes.shape({
//       imageUrl: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       message: PropTypes.string.isRequired,
//       isHost: PropTypes.bool.isRequired,
//       ownerId: PropTypes.string.isRequired,
//     })
//   ),
//   onKeyPress: PropTypes.func.isRequired,
//   onClick: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   memberNumber: PropTypes.number,
//   userId: PropTypes.string.isRequired,
//   isPrivate: PropTypes.bool,
// };

export default GroupItem;
