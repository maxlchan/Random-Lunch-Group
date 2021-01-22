import { ROUTES } from '../constants';

export const fetchPeople = async () => {
  try {
    const response = await fetch(`${ROUTES.baseUrl}${ROUTES.api.people}`, {
      method: 'GET',
    });

    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};

export const addPerson = async (name) => {
  try {
    const response = await fetch(`${ROUTES.baseUrl}${ROUTES.api.people}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    return response.json();
  } catch (err) {
    throw Error(err);
  }
};

export const deletePerson = async (id) => {
  try {
    const response = await fetch(
      `${ROUTES.baseUrl}${ROUTES.api.people}/${id}`,
      {
        method: 'DELETE',
      }
    );

    return response.json();
  } catch (err) {
    throw Error(err);
  }
};
