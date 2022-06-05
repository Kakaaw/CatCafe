import {Link} from 'react-router-dom';
import Logo from './images/logo.png';

function Header() {
  return (
  <div className="header flex">
    <a href="#"><img src={Logo} className="site-logo"/></a>
    <nav className="nav">
      <ul className="nav_list flex">
        <li className="nav_list-item"><Link to="/" className="nav_link">HOME</Link></li>
        <li className="nav_list-item"><Link to="/book_now" className="nav_link">BOOK NOW</Link></li>
        <li className="nav_list-item"><Link to="/meet_the_cats" className="nav_link">MEET THE CATS</Link></li>
      </ul>
    </nav>
  </div>
  );
}

export default Header;
