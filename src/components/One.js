import React from 'react';
import { motion } from 'framer-motion';
import Textspan from './Textspan';
import { TypeAnimation } from 'react-type-animation';

export default function One() {
  const name = 'CODESTORM'.split('');

  return (
    <>
     <p className='hi text-center' style={{fontFamily: "Titillium Web",color :"white",fontSize :"4vh",marginTop :"13%",marginBottom :"0"}}>Welcome to...</p>
      <div className='code'>
        {name.map((letter, index) => {
          return (
            <Textspan key={index}>
              {letter}
            </Textspan>
          )
        })}
      </div>
       <div className='type'>
      <TypeAnimation 
        sequence={[
          // Same String at the start will only be typed once, initially
          '',
          1000,
        
          1000,
          '#Scripting the storm',
          1000,
        ]}
        speed={50}
        style={{ fontSize: '2em' }}
        repeat={0}
      />
      </div>
    </>
  );
}
