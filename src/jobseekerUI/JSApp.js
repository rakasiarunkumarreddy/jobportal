// src/App.js (JSApp.js)
import Header from "./header/Header";
import Body from "./body/body";
import "./JSApp.css";
import FooterComp from "../HiringManager/dashborad/footer"
import DarkVariantExample from "../HiringManager/dashborad/carousal"

const JSApp = () => {
  return (
    <div
      className="app-container"
      style={{
        background: "linear-gradient(90deg, rgb(2, 73, 108), rgb(9, 33, 69));",
      }}
    >
      <Header />
      <Body  /> 
      <DarkVariantExample/>
      <FooterComp/>
    </div>
  );
};

export default JSApp;
