import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Contact () {
  return (
    <div className="contact text-center" style={{ marginLeft : "10vh",marginTop: "40vh" ,color : "white"}}>
      <p style={{fontSize :"7vh" ,textAlign :"center" }}> Contact Us </p>
      <p style={{fontSize :"3vh" }}> Instagram </p>
      <p style={{fontSize :"3vh" }}>Facebook</p>
      <p style={{fontSize :"3vh" }}>LinkedIn</p>
    </div>
  )
}
