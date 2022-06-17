import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowCircleLeftIcon from '../../assets/img/icons/ArrowCircleLeft.svg';

import HeaderContainer from './styles';

interface HeaderProps {
  name: string,
}

function Header({
  name,
}:HeaderProps):ReactElement {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <button
        type="button"
        id="header__go-back-button"
        onClick={() => navigate('/')}
      >
        <img src={ArrowCircleLeftIcon} />
        <span>
          Go back
        </span>
      </button>
      <span id="header-name">
        {name}
      </span>
    </HeaderContainer>
  );
}

export default Header;
