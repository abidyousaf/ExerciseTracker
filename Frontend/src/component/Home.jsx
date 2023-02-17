import React from "react";
import Servises from "./Servises";
import Carsoul from "./Carsoul";
import Footer from "./Footer";
import Navbar from "./Navbar";
function Home() {
  return (
    <div>
      <Navbar />
      <Servises />
      <Carsoul />
      <Footer />
    </div>
  );
}

export default Home;
