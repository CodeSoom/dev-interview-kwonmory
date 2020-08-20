const baseURL = 'http://localhost:8080/api';

export async function fetchInterviewQuestions(data) {
  const queryObj = { };

  if (data && data.checkedCategories) {
    queryObj.categories = data.checkedCategories;
  }

  const url = `${baseURL}/interview/questions`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    referrer: 'no-referrer',
    body: JSON.stringify(queryObj),
  });
  const output = await response.json();
  return output;
}

export async function fetchInterviewCategories() {
  const url = `${baseURL}/interview/categories`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchInterviews() {
  const url = `${baseURL}/interviews`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
