import "./App.css";
import Header from "./components/Layout/Header/Header";
import Banner from "./components/Layout/Banner/Banner";
import Service from "./components/Layout/Sevice/Service";
import About from "./components/Layout/About/About";
import Footer from "./components/Layout/Footer/Footer";
import Subscribe from "./components/Layout/Subscribe/Subscribe";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Service></Service>
      <About></About>
     
      <Subscribe></Subscribe>
       <Footer></Footer>
    </div>
  );
}

export default App;
