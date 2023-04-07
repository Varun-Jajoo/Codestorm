import React from 'react'
import fav from './fav.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{color : "white",fontWeight: "bolder " ,objectFit: "cover", backgroundRepeat: "no-repeat", backgroundImage: `url("https://png.pngtree.com/background/20210714/original/pngtree-abstract-red-background-with-the-concept-of-technology-picture-image_1197710.jpg")`, backgroundSize: "cover" }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active"  style={{color :"white",marginLeft :"30px"}} aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  style={{color :"white",marginLeft :"30px"}} href="#">
                Technovation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  style={{color :"white",marginLeft :"30px"}} href="#">
                Hackathon
              </a>
            </li>
          </ul>

        </div>
        <a className="navbar-brand" href="#" style={{}}>
          <p id='nav' style={{color :"white"}}>CODESTORM</p>
        </a>
      </div>
    </nav>

  )
}
