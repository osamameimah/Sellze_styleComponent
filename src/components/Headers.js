import {
  HeaderLower,
  HeaderRight,
  HeaderRightButtonStyle,
  HeaderRightStyle,
  HeaderStyle,
  Logo,
  Span1,
   Span2,
   Span3,
  UpperHeader,
} from "./styles/Headerstyle";
import Logoo from ".././../src/images/Logo.svg";
import Headerr from ".././../src/images/header.svg";
import { ButtonStyle } from "./styles/ButtonStyle";

let Headers = () => {
  return (
    <>
      <HeaderStyle>
        <div>
          <UpperHeader>
            <div>
              <Logo src={Logoo} />
            </div>
            <div>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Testimonial</a>
                </li>
                <li>
                  <a href="#">Priceing</a>
                </li>
              </ul>
            </div>
            <div>
              <ButtonStyle>Get Started</ButtonStyle>
            </div>
          </UpperHeader>
        </div>
        <div>
          <HeaderLower>
            <HeaderRightStyle>
              <Span1>InSpiration Technology.</Span1>
              <Span2>Runs faster. Costs less and never breaks.</Span2>
              <Span3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus
                consequat
              </Span3>
              <HeaderRightButtonStyle>
                <ButtonStyle >Get Started</ButtonStyle>
                <ButtonStyle backgroundColor="transparent" border="1px solid white">Free Trail</ButtonStyle>
              </HeaderRightButtonStyle>
            </HeaderRightStyle>

            <div>
              <HeaderRight src={Headerr} />
            </div>
          </HeaderLower>
        </div>
      </HeaderStyle>
    </>
  );
};
export default Headers;
