const ROUTES = {
  baseUrl: 'http://localhost:4000',
  api: {
    people: '/api/people',
  },
};

const MESSAGE = {
  emptyName: '이름을 입력해주세요.',
  nameExisted: '동일한 이름이 이미 존재합니다.',
  emptyGroupNumber: '그룹 수를 입력하세요.',
  emptyMinimumNumber: '최소 인원을 1명 이상 입력해주세요.',
  lackOfPerson: '그룹을 구성할 인원이 부족합니다.',
};

module.exports = { ROUTES, MESSAGE };
