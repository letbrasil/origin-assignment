import React from 'react';
import { logo } from '../../assets/icons';
import { Container, Logo } from './styles';

export default function Navbar() {
  return (
    <Container>
      <a href="https://www.useorigin.com" target="_blank" rel="noreferrer">
        <Logo src={logo} alt="Origin logo" />
      </a>
    </Container>
  );
}
