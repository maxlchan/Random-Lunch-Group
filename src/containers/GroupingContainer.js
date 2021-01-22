import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Button from '../components/Button';
import CloseButton from '../components/CloseButton';
import ControllerBox from '../components/ControllerBox';
import GroupItemBox from '../components/GroupBox';
import GroupItem from '../components/GroupItem';
import Input from '../components/Input';
import NameItem from '../components/NameItem';
import NameItemBox from '../components/NameItemBox';
import {
  addPerson,
  deletePerson,
  fetchPeople,
  groupPeople,
} from '../modules/lunch/lunch.reducer';
import { alertWarning, generateRandomizedGroup } from '../utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-family: Quicksand;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.strong};
  color: ${({ theme }) => theme.colors.whiteBlue};
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
`;

const ContentsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 1000px;
  height: 100%;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.deep};
  padding: 40px 40px 10px 40px;
  margin-bottom: 20px;
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

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleGroupNumberChange = (e) => setGroupNumber(e.target.value);
  const handleMinimumPerGroupChange = (e) => setMinimumPerGroup(e.target.value);
  const handleCloseButtonClick = (id) => dispatch(deletePerson(id));

  const handleAddPersonButtonClick = () => {
    const isNameExisted = people.find((person) => person.name === name);

    if (!name) return alertWarning('이름을 입력해주세요.');
    if (isNameExisted) return alertWarning('동일한 이름이 이미 존재합니다.');

    dispatch(addPerson(name));
    setName('');
  };

  const handleRandomizeGroupButtonClick = () => {
    if (!groupNumber) return alertWarning('그룹 수를 입력하세요.');
    if (minimumPerGroup < 1)
      return alertWarning('최소 인원을 1명 이상 입력해주세요.');
    if (peopleNumber < minimumPerGroup * groupNumber)
      return alertWarning('그룹을 구성할 인원이 부족합니다');

    const randomizedGroup = generateRandomizedGroup(
      people,
      Number(groupNumber),
      Number(minimumPerGroup)
    );
    console.log(randomizedGroup);
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
          <Input
            type={'text'}
            content={'이름'}
            placeholder={'추가할 이름을 입력하세요'}
            value={name}
            onChange={handleNameChange}
            onKeyPress={handleAddPersonButtonClick}
          />
          <Button text={'인원 추가하기'} onClick={handleAddPersonButtonClick} />
          <Input
            type={'number'}
            content={'그룹 수'}
            placeholder={'그룹 수를 입력하세요'}
            value={groupNumber}
            onChange={handleGroupNumberChange}
          />
          <Input
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
