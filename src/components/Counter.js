import {
  CounterStyle,
  NavCounterStyle,
  Span2,
  Span1,
} from "./styles/CounterStyle";

let Counter = () => {
    const Item = [
        {number:50,info:"Happy Clients"},
        {number:550,info:"Projects Completed"},
        {number:250,info:"Dedicated Members"},
        {number:30,info:"Awards Won"},
       ];


  return (
    <>
      <CounterStyle>
         
        {Item.map((item, id) => (
            <>
            <NavCounterStyle>
            <Span1 >{item.number}</Span1>
          <Span2>{item.info}</Span2>

            </NavCounterStyle>
 
          </>
         
        ))}
 
       </CounterStyle>
    </>
  );
};

export default Counter;
