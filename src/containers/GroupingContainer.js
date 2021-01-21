import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import NameBox from '../components/NameBox';

const COLORS = [
  { name: 'kff' },
  { name: 'asfaf' },
  { name: 'asdada' },
  { name: 'qasdfsd' },
  { name: 'asdasazz' },
  { name: 'asdaasdda' },
  { name: 'asdasdada' },
  { name: 'asdas' },
  { name: 'asdasazz' },
  { name: 'asdaasdda' },
  { name: 'asdasdada' },
  { name: 'asdas' },
  { name: 'asdasazz' },
  { name: 'asdaasdda' },
  { name: 'asdasdada' },
  { name: 'asdas' },
  { name: 'asdasazz' },
  { name: 'asdaasdda' },
  { name: 'asdasdada' },
  { name: 'asdas' },
  { name: 'asdasazz' },
  { name: 'asdaasdda' },
  { name: 'asdasdada' },
  { name: 'asdas' },
  { name: 'asdasazz' },
  { name: 'asdaasdda' },
  { name: 'asdasdada' },
  { name: 'asdas' },
  { name: 'asdasazz' },
  { name: 'asdaasdda' },
  { name: 'asdasdada' },
  { name: 'asdas' },
  { name: 'asdasazz' },
  { name: 'asdaasdda' },
  { name: 'asdasdada' },
  { name: 'asdas' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-width: 1000px;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-family: Quicksand;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.strong};
  color: ${({ theme }) => theme.colors.whiteBlue};
`;

const ContentsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  height: 100%;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.deep};
  padding: 0px 40px;
`;

const ContentController = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
  min-width: 300px;
  min-height: 500px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.whiteBlue};
  box-shadow: ${({ theme }) => theme.boxShadows.default};
`;

const ControllerUnit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:nth-child(1) {
    height: 200px;
  }
`;

const ContentGroup = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 500px;
`;

const PersonListWrap = styled.div`
  display: grid;
  width: 100%;
  height: 20%;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(10px, auto);
  column-gap: 10px;
  row-gap: 30px;
  border-bottom: 2px solid #f4976c;
  overflow: auto;
`;

const PersonGroupListWrap = styled.div`
  width: 100%;
  height: 80%;
`;

const GroupingContainer = () => {
  return (
    <Wrapper>
      <Title>Let's Make Lunch Group!</Title>
      <ContentsBox>
        <ContentController>
          <h1>옵션</h1>
          <ControllerUnit>
            <Input
              type={'text'}
              content={'이름'}
              placeholder={'추가할 이름을 입력하세요'}
            />
            <Button text={'사람 추가하기'} />
          </ControllerUnit>
          <ControllerUnit>
            <Input
              type={'number'}
              content={'그룹 수'}
              placeholder={'그룹 수를 입력하세요'}
            />
          </ControllerUnit>
          <ControllerUnit>
            <Input
              type={'number'}
              content={'그룹 최소 인원'}
              placeholder={'그룹별 최소 인원을 입력하세요'}
            />
          </ControllerUnit>
        </ContentController>
        <ContentGroup>
          <h1>리스트</h1>
          <PersonListWrap>
            {COLORS.map((color) => (
              <NameBox name={color.name} />
            ))}
          </PersonListWrap>
          <h1>그룹</h1>
          <PersonGroupListWrap></PersonGroupListWrap>
        </ContentGroup>
      </ContentsBox>
      <Button text={'사람 추가하기'} />
    </Wrapper>
  );
};

export default GroupingContainer;
