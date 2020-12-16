import React, { Fragment } from "react";
//import Navbar from './Menu/Navbar';
import "../assets/styles/componentscss/Home.scss";
//import NavBar from "./Menu/NavBar";
//import PRecientes from "./Proyect/RecientesProyect";
//import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <Fragment>        
        <div>
            <Footer style={{ height: "492px", background: "#333333" }} />
        </div>
    </Fragment>
  );
};
/*<div>
            <NavBar style={{ width: "100vw" }} />
        </div>
        <div>
            <PRecientes />
        </div>
        <div>
            <Contact />
        </div>*/

export default Home;
