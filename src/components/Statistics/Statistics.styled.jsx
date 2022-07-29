import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  /* margin-bottom: 10px; */
`;

export const BasicStatsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const BasicStat = styled.p`
  font-weight: 700;
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const StatNumber = styled.span`
  font-weight: 500;
`;

export const SummaryStats = styled.p`
  font-weight: 700;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;