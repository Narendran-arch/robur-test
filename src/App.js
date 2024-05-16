import Navbar from "./components/Navbar";

import About from "./page/about/About";
import Amenities from "./page/amenities/Amenities";
import Contact from "./page/contact/Contact";
import Home from "./page/home/Home";
import Membership from "./page/membership/Membership";
import Price from "./page/price/Price";

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Membership/>
      <Price/>
      <Amenities/>
      {/* <Contact/> */}
    </div>
  );
}

export default App;
