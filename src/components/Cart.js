import {
  CartItemStyle,
  CartStyle,
  Icon,
  Span1,
  Span2,
} from "./styles/CartStyle";
import Lampp from "../images/lamp.svg";
import handd from "../images/hand.svg";
import maintance from "../images/maintance.svg";
import user from "../images/user.svg";
import write from "../images/write.svg";
let Cart = () => {
  const CartItem = [
    {
      icon: Lampp,
      span1: "Creative Ideas",
      span2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
    },

    {
      icon: handd,
      span1: "Easy to Use",
      span2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida  ",
    },

    {
      icon: maintance,
      span1: "Perfect Showcase",
      span2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
    },

    {
      icon: user,
      span1: "User Friendly",
      span2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
    },

    {
      icon: write,
      span1: "Beautiful Blog",
      span2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida",
    },

    {
      icon: handd,
      span1: "Creative Ideas",
      span2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
    },
  ];

  return (
    <>
      <CartStyle>
         
          {CartItem.map((item, id) => (
            <>
            <CartItemStyle>
              <div>
                <Icon src={item.icon} />
              </div>

              <Span1>{item.span1}</Span1>
              <Span2>{item.span2}</Span2>
              </CartItemStyle>
            </>
          ))}
         
      </CartStyle>
    </>
  );
};

export default Cart;
