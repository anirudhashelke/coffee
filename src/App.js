import Header from "./Header";
import About from "./component/About";
import Banner from "./component/Banner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Customer from "./component/Customer";
import OUrblog from "./component/OUrblog";
import Touch from "./component/Touch";
import Footer from "./component/Footer";

function App() {
  return (
 <>
 <Header />
 <Banner />
 <About />
 <Customer />
 <OUrblog />
 <Touch />
 <Footer />
 </>
  );
}

export default App;
