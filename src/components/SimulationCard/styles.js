import styled from 'styled-components';

export const Container = styled.main`
  background-color: #ffffff;
  color: #1e2a32;
  width: 560px;
  height: 511px;
  margin: auto;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
`;

export const GoalWrapper = styled.div`
  display: flex;
  margin-bottom: 28px;
`;

export const GoalIcon = styled.img`
  margin-right: 20px;
`;

export const Title = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 24px;
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #708797;
`;

export const InputsWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
  font-size: 14px;
`;

export const GoalAmount = styled.div`
  display: flex;
  align-items: center;
  width: 272px;
  height: 56px;
  border: 1px solid #e9eef2;
  border-radius: 4px;
  margin-top: 4px;
  margin-right: 16px;
`;

export const Dollar = styled.img`
  margin: 16px 12px;
`;

export const Amount = styled.input`
  font-family: 'Rubik', sans-serif;
  font-size: 24px;
  color: #4d6475;
  width: 100%;
  border: none;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Calendar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 192px;
  height: 56px;
  border: 1px solid #e9eef2;
  border-radius: 4px;
  margin-top: 4px;
`;

export const ArrowButton = styled.button`
  padding: 18px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f4f8fa;
  }
`;

export const ReachDate = styled.div`
  text-align: center;
  font-size: 16px;
`;

export const Month = styled.p`
  font-weight: 600;
  margin-bottom: 7px;
`;

export const Year = styled.p`
  font-weight: 400;
  color: #708797;
`;

export const ResultBox = styled.div`
  border: 1px solid #e9eef2;
  margin-bottom: 32px;
  border-radius: 8px;
  width: 480px;
`;

export const MonthlyAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  padding: 0 32px;
  font-size: 20px;
`;

export const DepositValue = styled.p`
  font-family: 'Rubik', sans-serif;
  color: #0079ff;
  font-size: 32px;
`;

export const Detail = styled.div`
  height: 80px;
  background-color: #f4f8fa;
  border-radius: 0 0 8px 8px;
  padding: 24px 32px;
  font-size: 12px;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const ConfirmButton = styled.button`
  background: #1b31a8;
  border-radius: 32px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  width: 320px;
  height: 56px;
  padding: 18px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0079ff;
  }
`;
