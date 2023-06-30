import { FooterStyle, IconSocial, Logo, Social } from "./styles/FooterStyle";
import Logoo from "../images/Logo.svg";
import Instagram from "../images/insta.svg";
import Facebook from "../images/face.svg";
import Youtube from "../images/you.svg";
import Twitter from "../images/twit.svg";

let Footer = () => {
  return (
    <>
      <FooterStyle>
        <div>
          <div>
            
            <Logo src={Logoo} backgroundColor="none"  width="auto" height="auto"/>{" "}
          </div>
          <Social><a href="#"><Logo src={Instagram} /></a>
          <a href="#"><Logo src={Facebook} /></a>
          <a href="#"><Logo src={Youtube} /></a>
          <a href="#"><Logo src={Twitter} /></a>
 
          </Social>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">SHORT LINKS</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Screenshots</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">HELP LINK</a>
            </li>
            <li>
              <a href="#">How to download</a>
            </li>
            <li>
              <a href="#">How it work</a>
            </li>
            <li>
              <a href="#">Video tutorial</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">SHORT LINKS</a>
            </li>
            <li>
              <a href="#">Google Play Store</a>
            </li>
            <li>
              <a href="#">Apple App Store</a>
            </li>
            <li>
              <a href="#">Download Directly</a>
            </li>
          </ul>
        </div>
      </FooterStyle>
    </>
  );
};

export default Footer;
