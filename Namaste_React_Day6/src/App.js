import React from "react";
import ReactDOM from "react-dom/client";
import "../styles.css";
import HeaderComponent from './component/HeaderComponent'
import BodyComponent from './component/Bodycomponent'


const App = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
