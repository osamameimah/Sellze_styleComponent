import { createGlobalStyle } from "styled-components";
import Headers from "./components/Headers";
import Brand from "./components/Brand";
import Details from "./components/Details";
import Counter from "./components/Counter";
import Cart from "./components/Cart";
import Offer from "./components/Offer";
import Footer from "./components/Footer";

let App = () => {
  const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('/path-to-your-font/inter.woff2') format('woff2'),
         url('/path-to-your-font/inter.woff') format('woff');
 
    font-weight: normal;
    font-style: normal;
  }


  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;

  }`;

  return (
    <>
      <GlobalStyles />
      <Headers />
      <Brand />
      <Details/>
      <Counter/>
      <Cart/>
      <Offer/>
      <Footer/>
    </>
  );
};

export default App;
