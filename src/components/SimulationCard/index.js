import React from 'react';
import houseIcon from '../../assets/icons/buy-a-house.svg';
import dollarSign from '../../assets/icons/dollar-sign.svg';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import {
  Container,
  GoalWrapper,
  GoalIcon,
  Title,
  Subtitle,
  InputsWrapper,
  GoalAmount,
  Dollar,
  Calendar,
  ArrowButton,
  ResultBox,
  MonthlyAmount,
  Detail,
  DepositValue,
  ButtonWrapper,
  ConfirmButton
} from './styles';

export default function SimulationCard() {
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
            {/* <input /> */}
          </GoalAmount>
        </div>
        <div>
          <p>Reach goal by</p>
          <Calendar>
            <ArrowButton onClick={(e) => console.log('Previous month')}>
              <img src={arrowLeft} alt="arrow left" />
            </ArrowButton>
            :: MONTHS ::
            <ArrowButton onClick={(e) => console.log('Next month')}>
              <img src={arrowRight} alt="arrow right" />
            </ArrowButton>
          </Calendar>
        </div>
      </InputsWrapper>

      <ResultBox>
        <MonthlyAmount>
          <p>Monthly amount</p>
          <DepositValue>$0</DepositValue>
        </MonthlyAmount>
        <Detail>
          You're planning <strong>XX monthly deposits</strong> to reach your{' '}
          <strong>VALUE</strong> goal by <strong>MONTH/YEAR</strong>.
        </Detail>
      </ResultBox>

      <ButtonWrapper>
        <ConfirmButton onClick={(e) => console.log('Goal saved!')}>Confirm</ConfirmButton>
      </ButtonWrapper>
    </Container>
  );
}
