import styled from 'styled-components';

export const OptionsButtonsContainer = styled.div`
  margin-bottom: 20px;

  @media  screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const OptionButton = styled.button`
  min-width: 80px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: red;
  box-shadow: 0px 5px 10px -3px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 250ms;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:first-child {
    background-color: #77dd76;
    &:hover {
      background-color: #4bad4a;
    }
  }

  &:nth-child(2) {
    background-color: #edc947;
    &:hover {
      background-color: #c7a62d;
    }
  }

  &:last-child {
    background-color: #ff8462;
    &:hover {
      background-color: #da6747;
    }
  }

  &:active {
    transform: scale(0.95);
    box-shadow: none;
  }

  @media  screen and (max-width: 480px) {
    width: 120px;
    &:not(:last-child) {
    margin-right: 0;
    margin-bottom: 20px;
  }
  }
`;