import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderContainer from './styles';

interface HeaderProps {
  name: string,
}

function Header({
  name,
}:HeaderProps) {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <button
        type="button"
        id="header__go-back-button"
        onClick={() => navigate('/')}
      >
        Go back
      </button>
      <span id="header-name">
        {name}
      </span>
    </HeaderContainer>
  );
}

export default Header;
