import PropTypes from 'prop-types';
import { NoStatsMessage } from './Notification.styled';

export const Notification = ({message}) => {
  return (
    <div>
      <NoStatsMessage>{message}</NoStatsMessage>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}