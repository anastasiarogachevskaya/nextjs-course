import { useRef, useState } from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const [feedbackState, setFeedbackState] = useState();

  function submitFormHandler(event) { 
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = {email: enteredEmail, text: enteredFeedback}

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
  }

  function loadFeedbackFunction(event) { 
    event.preventDefault();
    fetch('/api/feedback')
    .then((response) => response.json())
    .then((data) => setFeedbackState(data.feedback))
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" ref={emailInputRef}/>
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send feedback</button>
      </form>

      <hr />
      <button onClick={loadFeedbackFunction}>Load feedback</button>
      {feedbackState && (
        <ul>
          {feedbackState.map((feedback) => (
            <li key={item.id}>
              <b>Email:</b>
              {' '}
              {feedback.email} 
              <br/>
              <b>Feedback:</b>
              {' '}
              {feedback.text} 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
