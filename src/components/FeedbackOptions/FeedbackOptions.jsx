import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackButtnos({ options, onLeaveFeedback }) {
  return (
    <ul className={css.btnList}>
      {options.map(option => (
        <li className={css.btnItem}>
          <button 
          className={css.btn}
          key={option} 
          type='button' 
          onClick={onLeaveFeedback} 
          name={option}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackButtnos.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
