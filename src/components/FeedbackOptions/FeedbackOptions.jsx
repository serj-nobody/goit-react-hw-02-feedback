import PropTypes from 'prop-types';
import { OptionsButtonsContainer, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <OptionsButtonsContainer>
      {options.map(option => (
        <OptionButton key={option} type="button" onClick={onLeaveFeedback}>{option}</OptionButton>
      ))}
    </OptionsButtonsContainer>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}