/* eslint-disable import/prefer-default-export */

export async function fetchQuestions() {
  const url = 'http://localhost:8080/api/problems';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
