import PropTypes from 'prop-types';
import { Buttons, Btn } from './FeedBackOptions.styled';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => (
    <Buttons>
        {options.map(option => (
            <Btn type="button" key={option} onClick={() => onLeaveFeedback(option)}>
                {option}

            </Btn>
        ))}
        
    </Buttons>
);
    

FeedBackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

