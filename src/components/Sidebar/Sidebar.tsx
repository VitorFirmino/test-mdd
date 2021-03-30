import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';
import logoMunddi from '../../assets/logo.png';

import { Aside, Footer } from './styles';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Aside>
      <Link to="/">
        <img src={logoMunddi} alt="Munddi" />
      </Link>

      <Footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </Footer>
    </Aside>
  );
};

export default Sidebar;
