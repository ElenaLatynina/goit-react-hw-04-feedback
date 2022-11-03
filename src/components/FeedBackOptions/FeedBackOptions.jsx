import PropTypes from 'prop-types';
import { Buttons, Btn } from './FeedBackOptions.styled';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Buttons>
            {options.map(option => (
                <Btn type="button"
                    name={option}
                    onClick={onLeaveFeedback}>
                    {option}

                </Btn>
            ))}
        
        </Buttons>);
};
    

FeedBackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;