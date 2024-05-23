import Header from "./Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Footer from "./component/Footer"
import About from "./component/About"
import Banner from "./component/Banner"
import Customer from "./component/Customer"
import OUrblog from "./component/OUrblog"
import Touch from "./component/Touch"
function App() {
  return (
 <>
 <Header />
 <Routes>
  <Route path="/" element={ <Home />} />
  <Route path="/about" element={ <Banner />} />
  <Route path="/coffees" element={ <About />} />
  <Route path="/shop" element={ <Customer />} />
  <Route path="/blog" element={ <OUrblog />} />
  <Route path="/contact" element={ <Touch />} />
 </Routes>
<Footer />
 </>
  );
}

export default App;
