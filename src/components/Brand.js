import amazon from "../images/amazon.svg";
import fedx from "../images/fedx.svg";
import feedex from "../images/feedex.svg";
import google from "../images/google.svg";
import microsoft from "../images/microsoft.svg";
import ola from "../images/ola.svg";
import walmart from "../images/walmart.svg";
import { BrandStyle, Brandd } from "./styles/BrandStyle";

let Brand = () => {
  const SrcBrand = [
    { url: amazon },
    { url: fedx },
    { url: feedex },
    { url: google },
    { url: microsoft },
    { url: ola },
    { url: walmart },
  ];

  return (
    <>
      <BrandStyle>
        {SrcBrand.map((brand, id) => (
          <Brandd key={id} src={brand.url} />
        ))}
      </BrandStyle>
    </>
  );
};

export default Brand;
