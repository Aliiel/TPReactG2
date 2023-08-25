// import React from 'react';

// const Footer = () => {
//   return (
//     <footer>
//       <div className="copyright">
//         &copy; {new Date().getFullYear()} MOBD. Tous droits réservés.
//       </div>
//       <div className="social-links">
//         <a href="lien_vers_instagram">Instagram</a>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Catégories</h3>
          <ul>
            <li><a href="#">Homme</a></li>
            <li><a href="#">Femme</a></li>
            <li><a href="#">Bijoux</a></li>
            <li><a href="#">Electronique</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="#">Retours</a></li>
            <li><a href="#">Service client</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <address>
            20 Rue du Luxembourg, 59100<br />
            Roubaix, France<br />
            Email : MODB@gmail.com<br />
            Téléphone : 06 9 73 06 52
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MODB. Tous droits réservés.
      </div>
      <div className="social-links">
      <a href="https://www.instagram.com/"><img src="\src\assets\images\facebook-2429746_960_720.png" alt="Instagram" /></a>
        <a href="https://www.facebook.com/"><img src="src\assets\images\images.png" alt="Facebook" /></a>
        <a href="https://www.snapchat.com/"><img src="\src\assets\images\Snapchat-Logo.png" alt="Snapchat" /></a>
       </div>
    </footer>
  );
}

export default Footer;