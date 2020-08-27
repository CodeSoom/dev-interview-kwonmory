const baseURL = 'http://localhost:8080/api';

const request = async (url, options = {}) => {
  const response = await fetch(`${baseURL}${url}`, options);
  const data = await response.json();
  return data;
};

export async function fetchInterviewQuestions(interview) {
  const queryObj = { };

  if (interview?.checkedCategories) {
    queryObj.categories = interview.checkedCategories;
  }

  const data = await request('/interview/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    referrer: 'no-referrer',
    body: JSON.stringify(queryObj),
  });

  return data;
}

export async function fetchInterviewCategories() {
  const data = await request('/interview/categories');

  return data;
}

export async function fetchInterviews() {
  const data = await request('/interviews');

  return data;
}

export async function fetchQuiz({ id }) {
  const data = await request(`/quiz/${id}`);

  return data;
}
