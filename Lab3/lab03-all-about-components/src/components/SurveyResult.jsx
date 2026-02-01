import PropTypes from "prop-types";

export default function SurveyResult({ answers, onRestart }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body px-4 py-4 text-center">
        <h3 className="fw-bold text-success mb-2">Survey Completed 🎉</h3>

        <p className="fw-semibold mb-0">Thank you for your answer!</p>
        <p className="fw-semibold mb-0">Here are your answers:</p>

        <ul className="list-group mb-4 text-center">
          {answers.map((ans, idx) => (
            <li key={idx} className="list-group-item">
              Q{idx + 1}: {ans}
            </li>
          ))}
        </ul>

        <div className="d-grid">
          <button className="btn btn-outline-primary btn-lg" onClick={onRestart}>
            Restart Survey
          </button>
        </div>
      </div>
    </div>
  );
}

SurveyResult.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRestart: PropTypes.func.isRequired,
};
