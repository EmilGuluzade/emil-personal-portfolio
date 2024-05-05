import Header from "./components/Layout/Header/Header";
import Banner from "./components/Home/Banner/Banner";
import Service from "./components/Home/Sevice/Service";
import About from "./components/Home/About/About";
import Contact from "./components/Home/Contact/Contact";
import Skils from "./components/Home/Skils/Skils";
import Portfolio from "./components/Home/Portfolio/Portfolio";
import Testominal from "./components/Home/Testominal/Testominal";
import Marque from "./components/Home/Marque/Marque";
import Blog from "./components/Home/Blog/Blog";
import Subscribe from "./components/Home/Subscribe/Subscribe";
import Footer from "./components/Layout/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Service></Service>
      <About></About>
      <Contact></Contact>
      <Skils></Skils>
      
<Portfolio></Portfolio>
      <Testominal></Testominal>
      <Marque></Marque>
     <Blog></Blog>
      <Subscribe></Subscribe>
       <Footer></Footer>
    </div>
  );
}

export default App;
