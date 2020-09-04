const baseURL = process?.env.NODE_ENV === 'production' ? process.env.API_PATH : 'http://localhost:8080/data';

export const request = async (url, options = {}) => {
  try {
    const response = await fetch(`${baseURL}${url}`, options);
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export async function fetchInterviews() {
  const data = await request('/interviews.json');

  return data;
}

// deprecated
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

// deprecated
export async function fetchInterviewCategories() {
  const data = await request('/interview/categories');

  return data;
}
