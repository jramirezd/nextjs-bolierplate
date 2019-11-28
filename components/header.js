import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <nav>
    <Link href="/">
      <a style={linkStyle}>Inicio</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>Pelis pelis</a>
    </Link>
    <Link href="/favorites">
      <a style={linkStyle}>Favoritas</a>
    </Link>
  </nav>
);

export default Header;