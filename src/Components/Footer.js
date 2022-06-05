import Logo from './images/logo.png';

function Footer() {
  return (
    <div className="footer">
        <div className="footer_list">
            <div className="footer_list-items">
                <a href="#"><img src={Logo} className="site-logo"/></a>
            </div>
            <div className="footer_list-items">
                <div className="footer-socials">
                    <a href="https://hr-hr.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <p className="copyright">Nikolina Vulić © 2022</p>
            </div>
        </div>
    </div>
  );
}

export default Footer;
