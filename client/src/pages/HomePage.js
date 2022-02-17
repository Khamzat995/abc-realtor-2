import React from "react";
import {
  FeaturedProducts,
  Jumbotron,
  Services,
  Contact,
  LowerAnnouncement,

  // Slider
} from "../components";


const HomePage = () => {
  return (
    <main>
      <LowerAnnouncement />
          <Jumbotron />
            <FeaturedProducts />
          <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
