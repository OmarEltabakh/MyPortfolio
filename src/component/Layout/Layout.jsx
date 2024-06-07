import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import "./Layout.css"
import Footer from './../Footer/Footer';
import About from './../About/About';
import Skills from './../Skills/Skills';
import Portfolio from './../Portfolio/Portfolio';
import Contact from './../Contact/Contact';


const Layout = () => {

  return <>
    <Nav />
    <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />

  </>

}



export default Layout;