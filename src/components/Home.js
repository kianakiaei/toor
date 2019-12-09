import React from "react";
import Brand from "./Brand";
import "../App.css";
import Gallary from "./Gallary";

function Home() {
  return (
    <div>
      <h1>تورهای شگفت انگیز</h1>
      <Gallary />
      <Brand></Brand>
    </div>
  );
}

export default Home;
