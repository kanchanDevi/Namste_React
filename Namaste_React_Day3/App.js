import React from "react";
import { createElement as ce } from "react";
import ReactDOM from "react-dom/client";
import './styles.css';
import logo from "./img/react_logo.svg";
import avatar from "./img/ava.jpg";

const heading1 = ce( 
    "h1",
    {id: "title1",
     key: "h1"   },
    "heading1 from parcel"
);
const heading2 = ce( 
    "h2",
    {id: "title2",
     key: "h2"   },
    "heading2 from parcel"
);
const heading3 = ce( 
    "h3",
    {id: "title3",
     key: "h3"   },
    "heading3 from parcel"
);
const containerDiv = ce( 
    "div",
    {id: "conatiner",
     class: "title"   },
    [heading1, heading2 , heading3]
);
const Headings = ( <div className="title">
    {containerDiv}
    <h1 id="title1" key ="h1">Heading1 React Element</h1>
    <h2 id="title2" key ="h2">Heading2 React Element</h2>
    <h3 id="title3" key ="h3">Heading3 React Element</h3>
</div>
);

// functional component 
const Title = ()=> {return (
    <div className="title">
        {Headings}
    <h1 id="title1" key ="h1"> React Element</h1>
    <h2 id="title2" key ="h2"> React Element</h2>
    <h3 id="title3" key ="h3"> React Element</h3>
    </div>)}

// Composition of component 

const HeaderComponent = ()=>{
    return(
        <div className="container">
        <header>
        <div className="header_content">
        <a href="#">
                <img src={logo} alt="logo" height={50} width={50} />
                </a>
            <nav>
                <form> <input type="search" placeholder="Search..." className="searchBar" /></form>
            </nav>
            <a href="#" className="image">
                <img src={avatar} alt="avatar" className="avatar"  height={50} width={50}/>
                </a>
                </div>
        </header>
        </div>
    )
}

const NestedHeader = ()=>{
    return(
        <div>
        <HeaderComponent/>
        <strong>Composition of components</strong>
 
        <Title/>
        
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NestedHeader/>, );