import React from "react";
import {
  MAX_INPUT_LENGTH,
  SENTIMENT_RESULT_DESCRIPTION,
} from "./sentimentConstants.ts";
import PropTypes from "prop-types";

export const SentimentView = ({ inputRef, status, analyzeSentiment }) => {
  return (
    <div className="sentiment-container">
      <h1 className="sentiment-header">Sentiment Analysis</h1>
      <textarea
        ref={inputRef}
        className="sentiment-input"
        placeholder="Enter text for analysis..."
        maxLength={MAX_INPUT_LENGTH}
      />
      {status.error && <p className="error">{status.error}</p>}

      <button
        className="btn orange-btn block-btn"
        onClick={analyzeSentiment}
        disabled={status.loading}
      >
        {status.loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
};
SentimentView.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  status: PropTypes.shape({
    error: PropTypes.string,
    loading: PropTypes.bool,
  }).isRequired,
  analyzeSentiment: PropTypes.func.isRequired,
};

export const Popup = ({ result, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className={`popup-content ${result.toLowerCase()}`}>
        <p>
          Result: <strong>{result}</strong>
        </p>
        <p>{SENTIMENT_RESULT_DESCRIPTION[result]}</p>
        <button className="btn pink-btn block-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  result: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
