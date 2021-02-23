import React from 'react';
import Link from 'next/link';
import Nav from './Nav';
import { Logo } from './styles/Logo';
import { HeaderStyle } from './styles/HeaderStyle';

const Header = () => (
  <HeaderStyle>
    <div className="bar">
      <Logo>
        <Link href="/">Urban Styles</Link>
      </Logo>
    </div>
    <div className="sub-bar">Search</div>
    <Nav />
  </HeaderStyle>
);

export default Header;
