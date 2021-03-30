import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';

import { Container, Card } from './styles';
import logo from '../../assets/logo.png';

const MoreInformation: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Container>
        <Card>
          <img src={logo} alt="Logo Munddi" />

          <h1>Bike Mobile</h1>

          <p>Endereço: Rua Doutor Albuquerque Lins</p>
          <p>Cidade: São Paulo - SP</p>
          <p>Distrito: Santa Cecília</p>
        </Card>
      </Container>
    </>
  );
};

export default MoreInformation;
