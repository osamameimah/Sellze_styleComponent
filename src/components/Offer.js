import { ButtonStyle } from "./styles/ButtonStyle";
import { Input, OfferStyle, Span1, Span2 } from "./styles/OfferStyle";

let Offer = () => {
  return (
    <>
      <OfferStyle>
        <Span1>NEWSLETTER</Span1>
        <Span2>We Offer Every Month 20% Off For Our All Subscribers</Span2>
        <div>
          <Input placeholder="Email Address" />
          <ButtonStyle borderRadius="0" border="1px solid #A9A9A9">
            Subscribe
          </ButtonStyle>
        </div>
      </OfferStyle>
    </>
  );
};

export default Offer;
