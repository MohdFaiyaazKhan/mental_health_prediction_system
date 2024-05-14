import React from 'react';
import "../styles/Results.scss"

const Result = ({ result }) => {
  return (
    <div className='result'>
      {/* <p>Conversation ID: {result.conversationId}</p> */}
      <h2>Predicted Response :</h2>
      <p>{result.response}</p>
    </div>
  );
};

export default Result;
