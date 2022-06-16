import React, { FC } from 'react';

import HeaderContainer from './styles';

function Header({
  name,
}: {
  name: string,
}) {
  return (
    <HeaderContainer>
      <span id="header-name">
        {name}
      </span>
    </HeaderContainer>
  );
}

export default Header;
