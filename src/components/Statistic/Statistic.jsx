import PropTypes from 'prop-types';
import { Option, Options } from './Statistic.styled';

export const Statistic = ({ good, neutral, bad, totalFeedback, positivePercentage}) => {
    return (
      <Options>
        <Option>Good: {good}</Option>
        <Option>Neutral: {neutral}</Option>
        <Option>Bad: {bad}</Option>
        <Option>Total: {totalFeedback}</Option>
        <Option>Positive Feedback: {positivePercentage}%</Option>
      </Options>
    );
  }


Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}