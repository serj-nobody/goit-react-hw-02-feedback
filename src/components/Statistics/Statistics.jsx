import PropTypes from 'prop-types';
import { Notification } from "components/Notification/Notification";
import { StatisticsContainer, BasicStatsContainer, BasicStat, StatNumber, SummaryStats } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage }) => {
  return (<>
    {total ? (
      <StatisticsContainer>
        <BasicStatsContainer>
          <BasicStat>Good: <StatNumber>{good}</StatNumber></BasicStat>
          <BasicStat>Neutral: <StatNumber>{neutral}</StatNumber></BasicStat>
          <BasicStat>Bad: <StatNumber>{bad}</StatNumber></BasicStat>
        </BasicStatsContainer>
        <SummaryStats>Total: <StatNumber>{total}</StatNumber></SummaryStats>
        <SummaryStats>Positive feedback: <StatNumber>{positivePercentage}%</StatNumber></SummaryStats>
      </StatisticsContainer>
    ) : (
      <Notification message="There is no feedback" />
    )}
  </>);
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}