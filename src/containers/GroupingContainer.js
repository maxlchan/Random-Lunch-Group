import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import CloseButton from '../components/Button/CloseButton';
import ControllerBox from '../components/Box/ControllerBox';
import GroupItemBox from '../components/Box/GroupBox';
import GroupItem from '../components/Item/GroupItem';
import InputItem from '../components/Item/InputItem';
import NameItem from '../components/Item/NameItem';
import NameItemBox from '../components/Box/NameItemBox';
import { alertWarning, generateRandomizedGroup } from '../utils';
import {
  addPerson,
  deletePerson,
  fetchPeople,
  groupPeople,
} from '../modules/lunch/lunch.reducer';
import { MESSAGE } from '../constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.whiteBlue};
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
`;

const ContentsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 1000px;
  height: 100%;
  min-height: 80vh;
  padding: 40px 40px 10px 40px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.yellow};
  box-shadow: ${({ theme }) => theme.boxShadows.deep};
`;

const ContentMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

const ContentTitle = styled.h1`
  width: 100%;
  margin: 20px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const ContentGuideText = styled.h1`
  color: gray;
`;

const GroupingContainer = () => {
  const { people, groups } = useSelector((state) => state.lunch);
  const [name, setName] = useState('');
  const [groupNumber, setGroupNumber] = useState('');
  const [minimumPerGroup, setMinimumPerGroup] = useState('');
  const dispatch = useDispatch();
  const peopleNumber = people.length;
  const groupsNumber = groups.length;

  const handleNameChange = (e) => setName(e.target.value);
  const handleGroupNumberChange = (e) => setGroupNumber(e.target.value);
  const handleMinimumPerGroupChange = (e) => setMinimumPerGroup(e.target.value);
  const handleCloseButtonClick = (id) => dispatch(deletePerson(id));

  const handleAddPersonButtonClick = () => {
    const isNameExisted = people.find((person) => person.name === name);

    if (!name) return alertWarning(MESSAGE.emptyName);
    if (isNameExisted) return alertWarning(MESSAGE.nameExisted);

    dispatch(addPerson(name));
    setName('');
  };

  const handleRandomizeGroupButtonClick = () => {
    if (!groupNumber) return alertWarning(MESSAGE.emptyGroupNumber);
    if (minimumPerGroup < 1) return alertWarning(MESSAGE.emptyMinimumNumber);
    if (peopleNumber < minimumPerGroup * groupNumber) return alertWarning(MESSAGE.lackOfPerson);

    const randomizedGroup = generateRandomizedGroup(
      people,
      Number(groupNumber),
      Number(minimumPerGroup)
    );

    dispatch(groupPeople(randomizedGroup));
  };

  useEffect(() => {
    dispatch(fetchPeople());
  }, []);

  return (
    <Wrapper>
      <Title>Let's Make Random Lunch Group!</Title>
      <ContentsBox>
        <ControllerBox name={'옵션'}>
          <InputItem
            type={'text'}
            content={'이름'}
            placeholder={'추가할 이름을 입력하세요'}
            value={name}
            onChange={handleNameChange}
            onKeyPress={handleAddPersonButtonClick}
          />
          <Button text={'인원 추가하기'} onClick={handleAddPersonButtonClick} />
          <InputItem
            type={'number'}
            content={'그룹 수'}
            placeholder={'그룹 수를 입력하세요'}
            value={groupNumber}
            onChange={handleGroupNumberChange}
          />
          <InputItem
            type={'number'}
            content={'그룹별 최소 인원'}
            placeholder={'최소 인원을 입력하세요'}
            value={minimumPerGroup}
            onChange={handleMinimumPerGroupChange}
          />
          <Button
            text={'랜덤으로 그룹 나누기'}
            onClick={handleRandomizeGroupButtonClick}
          />
        </ControllerBox>
        <ContentMain>
          <ContentTitle>점심 인원</ContentTitle>
          {peopleNumber ? (
            <NameItemBox>
              {people.map((person) => (
                <NameItem name={person.name} key={person._id}>
                  <CloseButton
                    onClick={handleCloseButtonClick}
                    id={person._id}
                  />
                </NameItem>
              ))}
            </NameItemBox>
          ) : (
            <ContentGuideText>인원을 등록해주세요</ContentGuideText>
          )}
          <ContentTitle>그룹</ContentTitle>
          {groupsNumber ? (
            <GroupItemBox>
              {groups.map((group, index) => (
                <GroupItem
                  key={group._id}
                  index={index + 1}
                  groupMembers={group.members}
                />
              ))}
            </GroupItemBox>
          ) : (
            <ContentGuideText>그룹을 나누어 주세요</ContentGuideText>
          )}
        </ContentMain>
      </ContentsBox>
    </Wrapper>
  );
};

export default GroupingContainer;
