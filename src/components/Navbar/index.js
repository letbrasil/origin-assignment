import React from 'react';
import { logo } from '../../assets/icons';
import { Container, Logo } from './styles';

export default function Navbar() {
  return (
    <Container>
      <Logo src={logo} alt="Origin logo" />
    </Container>
  );
}
