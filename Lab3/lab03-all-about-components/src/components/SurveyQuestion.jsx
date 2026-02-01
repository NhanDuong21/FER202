import { useState } from "react";
import PropTypes from "prop-types";

export default function SurveyQuestion({
  questionText,
  options,
  currentValue,
  onSelect,
  onNext,
}) {
  const [error, setError] = useState("");

  const handleNextClick = () => {
    if (!currentValue) {
      setError("Please select an option before proceeding.");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body px-4 py-4">
        <h4 className="text-center fw-bold mb-4">{questionText}</h4>

        <div className="border rounded p-3 mb-3">
          <div className="row">
            <div className="col-2 d-flex flex-column align-items-start gap-2">
              {options.map((opt) => (
                <input
                  key={opt}
                  className="form-check-input"
                  type="radio"
                  name="surveyOption"
                  value={opt}
                  checked={currentValue === opt}
                  onChange={(e) => {
                    setError("");
                    onSelect(e.target.value);
                  }}
                />
              ))}
            </div>

            <div className="col-10 d-flex flex-column align-items-center gap-2">
              {options.map((opt) => (
                <div key={opt} className="text-center">
                  {opt}
                </div>
              ))}
            </div>
          </div>
        </div>

        {error && (
          <div className="alert alert-danger text-center mb-3" role="alert">
            <span className="me-2">⚠️</span>
            {error}
          </div>
        )}

        <div className="d-grid">
          <button className="btn btn-primary btn-lg" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

SurveyQuestion.propTypes = {
  questionText: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentValue: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};
