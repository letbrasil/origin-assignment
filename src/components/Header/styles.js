import styled from 'styled-components';

export const Container = styled.header`
  text-align: center;
  font-size: 20px;
  margin-top: 48px;
  margin-bottom: 24px;

  @media (max-width: 560px) {
    margin-top: 32px;
    font-size: 18px;
  }
`;

export const Title = styled.p`
  color: #1b31a8;
`;
