import PropTypes from 'prop-types';
import { Buttons, Button } from './FeedBackOptions.styled';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Buttons>
            {options.map(option => (
                <Button type="button" onClick={onLeaveFeedback} key={option}></Button>
            ))}
        </Buttons>
    )
};

FeedBackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback:PropTypes.func.isRequired,
}