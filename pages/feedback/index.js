import { buildFeedbackPath, extractFeedback } from '../api/feedback';

const FeedbackPage = ({ feedbackItems }) => {
  return (
    <ul>
      {feedbackItems.map((feedback) => (
        <li key={feedback.id}>
          <b>Email: </b>{feedback.email} 
          <br/>
          <b>Feedback: </b>{feedback.text} 
        </li>
      ))}
    </ul>
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