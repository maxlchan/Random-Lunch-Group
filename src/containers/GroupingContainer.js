import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../components/Button';
import ControllerBox from '../components/ControllerBox';
import GroupItemBox from '../components/GroupBox';
import GroupItem from '../components/GroupItem';
import Input from '../components/Input';
import NameItem from '../components/NameItem';
import NameItemBox from '../components/NameItemBox';

const members = [
  { name: '김찬중' },
  { name: 'asfaf' },
  { name: 'asdada' },
  { name: 'qasdfsd' },
  { name: 'asdasazz' },
  { name: 'asdaasdda' },
  { name: 'asdasdada' },
];

const groups = [
  {
    members: ['asfaf', 'asfaf', 'asfaf' ],
  },
  {
    members: ['asfaf', 'asfaf', 'asfaf'],
  },
  {
    members: ['asfaf', 'asfaf', 'asfaf'],
  },
];


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
  text-shadow: 2px 3px 5px rgba(0,0,0,0.5);
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

const GroupingContainer = () => {
  return (
    <Wrapper>
      <Title>Let's Make Lunch Group!</Title>
      <ContentsBox>
        <ControllerBox name={'옵션'}>
          <Input
            type={'text'}
            content={'이름'}
            placeholder={'추가할 이름을 입력하세요'}
          />
          <Button text={'인원 추가하기'} />
          <Input
            type={'number'}
            content={'그룹 수'}
            placeholder={'그룹 수를 입력하세요'}
          />
          <Input
            type={'number'}
            content={'그룹별 최소 인원'}
            placeholder={'최소 인원을 입력하세요'}
          />
          <Button text={'랜덤으로 그룹 나누기'} />
        </ControllerBox>
        <ContentMain>
          <ContentTitle>점심 인원</ContentTitle>
          <NameItemBox>
            {members.map((color) => (
              <NameItem name={color.name} />
            ))}
          </NameItemBox>
          <ContentTitle>그룹</ContentTitle>
          <GroupItemBox>
            {groups.map((group, index) => (
              <GroupItem index={index} memberNames={group.members} />
            ))}
          </GroupItemBox>
        </ContentMain>
      </ContentsBox>
    </Wrapper>
  );
};

export default GroupingContainer;
