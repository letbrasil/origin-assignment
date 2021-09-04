import styled from 'styled-components';

export const Container = styled.nav`
  height: 80px;
  background-color: #ffffff;

  @media (max-width: 560px) {
    height: 56px;
  }
`;

export const Logo = styled.img`
  margin: 24px 56px;

  @media (max-width: 560px) {
    margin: 16px;
    width: 75px;
    height: 24px;
  }
`;
