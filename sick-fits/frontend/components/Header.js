import React from 'react';
import Link from 'next/link';
import Nav from './Nav';

const Header = () => (
  <header>
    <div className="bar">
      <Link href="/">Urban Styles</Link>
    </div>
    <div className="sub-bar">Search</div>
    <Nav />
  </header>
);

export default Header;
