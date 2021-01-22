import axios from 'axios';

export const fetchPeople = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/people', {
      method: 'GET',
    });

    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};

export const addPerson = async (name) => {
  try {
    const response = await fetch('http://localhost:4000/api/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};
