import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { Container, EnterApp } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <header>
          <img src={logo} alt="Logo Munddi" />
        </header>
        <EnterApp>
          <Link to="/dashboard-map">
            <FiArrowRight size={34} color="rgba(0, 0, 0, 0.6)" />
          </Link>
        </EnterApp>
      </Container>
    </>
  );
};

export default Home;
