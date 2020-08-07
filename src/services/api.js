/* eslint-disable import/prefer-default-export */

export async function fetchQuestions() {
  const url = 'http://localhost:8080/api/questions';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchParts() {
  const url = 'http://localhost:8080/api/parts';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
