import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        &copy; {new Date().getFullYear()} VotreNom. Tous droits réservés.
      </div>
      <div className="social-links">
        <a href="lien_vers_instagram">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;