import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';

export const alertWarning = (text) => {
  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text,
  });
};

export const generateRandomizedGroup = (members, groupNumber, minimumNumberPerGroup) => {
  const MEMBER_NUMBER = members.length;
  const [group, indexGroup] = generateGroupMemory(groupNumber);
  let index = 0;
  let isMinimumNumberFilled = false;

  while (index < MEMBER_NUMBER) {
    const currentMember = members[index];

    if (isMinimumNumberFilled) {
      const randomIndex = Math.ceil(Math.random() * groupNumber) - 1;
      const currentGroup = group[randomIndex]['members'];

      currentGroup.push(currentMember);
      index++;

      continue;
    }

    const INDICES_LENGTH = indexGroup.length;
    const random = Math.ceil(Math.random() * INDICES_LENGTH) - 1;
    const randomIndex = indexGroup[random];
    const currentGroup = group[randomIndex]['members'];

    currentGroup.push(currentMember);
    index++;

    if (group[randomIndex]['members'].length === minimumNumberPerGroup) {
      indexGroup.splice(random, 1);
    }

    if (!indexGroup.length) isMinimumNumberFilled = true;
  }

  return group;
};

export const generateGroupMemory = (groupNumber) => {
  const group = [];
  const indexGroup = [];

  for (let i = 0; i < groupNumber; i++) {
    const key = uuidv4();
    const hash = {
      members: [],
      _id: key,
    };

    group.push(hash);
    indexGroup.push(i);
  }

  return [group, indexGroup];
}