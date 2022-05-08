import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Base(props) {
  return (
    <div id="Base">
      <Header></Header>
      <main style={{ paddingTop: "77px" }}>{props.children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Base;
