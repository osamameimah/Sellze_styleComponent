import {
  DetailsRightStyle,
  DetailsStyle,
  Man,
  Span1,
  Span2,
  Span3,
} from "./styles/DetailsStyle";
import Mann from "../images/man.svg";
import { ButtonStyle } from "./styles/ButtonStyle";

let Details = () => {
  return (
    <>
      <DetailsStyle>
      <div>
          <Man src={Mann} />
        </div>

        <div>
          <DetailsRightStyle>
            <Span1>Lorem ipsum dolor sit ame</Span1>
            <Span2>Simple Solutions for Complex Connections</Span2>
            <Span3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec
              gravida feugiat neque, ipsum faucibus. Pharetra vel suspendisse mi
              odio a velit feugiat sapien.
            </Span3>
            <ButtonStyle>Learn More</ButtonStyle>

          </DetailsRightStyle>
        </div>
 <div>
  </div>
      </DetailsStyle>
    </>
  );
};

export default Details;
