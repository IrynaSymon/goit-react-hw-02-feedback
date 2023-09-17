import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <ul className={css.optionList}>
      {options.map(option => (
        <li key={option}>
          <button
            className={css.optionButton}
            key={option}
            onClick={() => onBtnClick(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
