import { Link } from "react-router-dom";
import "./index.scss";

const Contact = () => {
  return (
    <div id="contactPage" className="contact">
      <h1 className="contactTitle">Contact</h1>
      <div className="contactList">
        <p className="contactEmail">contact@website.com</p>
        <p className="contactPhone">+0 0000 0000</p>
      </div>
      <ul className="contactLink">
        <li><Link>Twitter</Link></li>
        <li><Link>LinkedIn</Link></li>
        <li><Link>Dribble</Link></li>
        <li><Link>Youtobe</Link></li>
        <li><Link>Instagram</Link></li>
        <li><Link>Fabook</Link></li>
      </ul>
    </div>
  );
};

export default Contact;
