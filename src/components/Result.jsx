import React from 'react';
import "../styles/Results.scss"

const Result = ({ result }) => {
  return (
    <div className="result">
      <h2>Prediction Result:</h2>
      <p>{result}</p>
    </div>
  );
}

export default Result;