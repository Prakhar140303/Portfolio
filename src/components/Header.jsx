
const Header = () => {
  return (
    <header style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li><a href="#home" style={{ color: '#fff' }}>Home</a></li>
          <li><a href="#about" style={{ color: '#fff' }}>About</a></li>
          <li><a href="#portfolio" style={{ color: '#fff' }}>Portfolio</a></li>
          <li><a href="#contact" style={{ color: '#fff' }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
