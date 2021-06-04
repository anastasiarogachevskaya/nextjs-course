import { useState } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

const FeedbackPage = ({ feedbackItems }) => {
  const [feedbackData, setFeedbackData] = useState();
  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }
  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}{' '}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const path = buildFeedbackPath();
  const data = extractFeedback(path);

  return {
    props: {
      feedbackItems: data,
    }
  }
}

export default FeedbackPage;