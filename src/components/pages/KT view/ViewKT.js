import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../NavBar";
import KT from "./KT";

const ViewKT = () => {
    return (
        <React.Fragment>
            <div style={{backgroundColor: "#fefefe"}}> 
             <NavBar></NavBar>
             <div className="container p-4"> 
              <div className="card" style={{ backgroundColor: "#70B9E6" }}>
              <div className="card-body">
                <h1 style={{ font: "25px" , color: "#ffffff" }}>NETS: UML Diagrams</h1>
              </div>
              </div>
              </div>
            <div className="container p-4">
                <div className="card">
                    <div className="card-header">
                    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#f7f7f7" }}>
                     
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-5 mb-lg-0">
                        <li className="nav-item"  style={{fontWeight:"bold"}}>
                            
                            <Link to="/" className="nav-link active">Units</Link>
                        </li>
                        <li className="nav-item"  style={{fontWeight:"bold"}}>
                            
                            <Link to="/article" className="nav-link">Articles</Link>
                        </li>
                        <li className="nav-item"  style={{fontWeight:"bold"}}>
                            
                            <Link to="/" className="nav-link">Discussion Forums</Link>
                        </li>
    
                    </ul>
                    
                </div>
                    </nav>
                    </div>
                    <div className="card-body">
                        <div className="container p-3">
                        <h4 style={{ font: "25px" , color: "#000000" }}>KT Session 01</h4>
                        <br></br>
                            <KT/>
                        </div>     
                    </div>
                     
                </div>
                 <p></p>
                </div>
            </div>
        </React.Fragment>
    );
}
export default ViewKT;

 