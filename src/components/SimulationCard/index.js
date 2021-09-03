import React, { useState } from 'react';
import { houseIcon, dollarSign, arrowLeft, arrowRight } from '../../assets/icons';
import moneyFormat from '../../utils';
import {
  Container,
  GoalWrapper,
  GoalIcon,
  Title,
  Subtitle,
  InputsWrapper,
  GoalAmount,
  Dollar,
  Amount,
  Calendar,
  ArrowButton,
  ReachDate,
  Month,
  Year,
  ResultBox,
  MonthlyAmount,
  Detail,
  DepositValue,
  ButtonWrapper,
  ConfirmButton
} from './styles';

export default function SimulationCard() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const nextMonth = today.getMonth() + 1;

  const [amount, setAmount] = useState('');
  const [year, setYear] = useState(currentYear);
  const [month, setmonth] = useState(nextMonth);

  function monthName(i) {
    return new Date(year, i).toLocaleString('en', { month: 'long' });
  }

  function handleMonthChange(n) {
    const newMonth = month + n;
    if (newMonth >= 12) {
      setmonth(newMonth - 12);
      setYear(year + 1);
    } else if (newMonth < 0) {
      setmonth(newMonth + 12);
      setYear(year - 1);
    } else {
      setmonth(newMonth);
    }
  }

  function monthsInterval() {
    const yearDiff = (year - currentYear) * 12;
    const monthDiff = month - currentMonth;
    return yearDiff + monthDiff;
  }

  function getMonthlyAmount(totalAmount, totalMonths) {
    return moneyFormat(Number(totalAmount) / totalMonths);
  }

  return (
    <Container>
      <GoalWrapper>
        <GoalIcon src={houseIcon} alt="house icon" />
        <div>
          <Title>Buy a house</Title>
          <Subtitle>Saving goal</Subtitle>
        </div>
      </GoalWrapper>

      <InputsWrapper>
        <div>
          <p>Total amount</p>
          <GoalAmount>
            <Dollar src={dollarSign} alt="dollar sign" />
            <Amount
              type="number"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </GoalAmount>
        </div>
        <div>
          <p>Reach goal by</p>
          <Calendar>
            <ArrowButton onClick={() => handleMonthChange(-1)}>
              <img src={arrowLeft} alt="arrow left" />
            </ArrowButton>
            <ReachDate>
              <Month>{monthName(month)}</Month>
              <Year>{year}</Year>
            </ReachDate>
            <ArrowButton onClick={() => handleMonthChange(1)}>
              <img src={arrowRight} alt="arrow right" />
            </ArrowButton>
          </Calendar>
        </div>
      </InputsWrapper>

      <ResultBox>
        <MonthlyAmount>
          <p>Monthly amount</p>
          <DepositValue>{getMonthlyAmount(amount, monthsInterval())}</DepositValue>
        </MonthlyAmount>
        <Detail>
          You're planning <strong>{monthsInterval()} monthly deposits</strong> to reach
          your <strong>{moneyFormat(amount)}</strong> goal by{' '}
          <strong>
            {monthName(month)} {year}
          </strong>
          .
        </Detail>
      </ResultBox>

      <ButtonWrapper>
        <ConfirmButton onClick={() => alert('Goal saved!')}>Confirm</ConfirmButton>
      </ButtonWrapper>
    </Container>
  );
}
