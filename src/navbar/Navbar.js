import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href = 'Home' className='logo'>
          <img src = "/JOBSEX_3.png" alt='Logo' style={{height: '80px'}} />
        </a>
        <div className='nav-info'>
          <a href="position">POSITION</a>
          <a href="learn">LEARN</a>
          <a href="about">ABOUT</a>
        </div>
      </div>
    </nav>
  )
}


export default Navbar;
