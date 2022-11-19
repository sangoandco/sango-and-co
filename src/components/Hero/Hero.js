import React, { useEffect, useRef } from "react";
import './Hero.css';
import storm from "../../images/lightning.jpg";
import sango from "../../images/sangoandco-w.png";
import Image from 'react-bootstrap/Image'
import { Navbar } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap';

function Hero() {

  console.log('Hero Test')
  const ref = useRef();

    const phrases = [
      'secure',
      'robust',
      'flexible',
      'scalable',
      'highly available', 
      'cloud agnostic', 
      'reactive',
      'mobile friendly', 
      'user friendly'      
    ];
    
    useEffect(() => {

        let i = 0;

        const randomizeText = () => {
            const phrase = document.querySelector('.random-word');
            // const computed = window
            // .getComputedStyle(ref.current)
            // .getPropertyValue('animation')

            // const animationTime = parseFloat(computed.match(/\d*[.]?\d+/)) * 1000;

            i = randomNum(i, phrases.length);
            const newPhrase = phrases[i];
            
            setTimeout(() => {
              phrase.textContent = newPhrase;
            }, 400);
        }
          
        const randomNum = (num, max) => {
            let j = Math.floor(Math.random() * max);
            

            if (num === j) {
              return randomNum(i, max);
            } else {
              return j;
            }
        }
          
        const getAnimationTime = () => {
            const computed = window
            .getComputedStyle(ref.current)
            .getPropertyValue('animation')
    
              const animationTime = parseFloat(computed.match(/\d*[.]?\d+/)) * 1000;
            return animationTime;
        }
          
        randomizeText();
        setInterval(randomizeText, getAnimationTime());
    },[])

    return (
      <>
         <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container className="sango-nav">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={sango}
              width="24"
              height="auto"
              className="d-inline-block align-top"
            />
            <span>Sango & Co.</span>
          </Navbar.Brand>
        </Container>
      </Navbar>   
        <div className="bg-image" style={{backgroundImage: `url(${storm})`, height: '100vh'}}>
        <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="card-body text-white text-center sango">
              {/* <h1 className="sango-title">Sango & Co.</h1> */}
              {/* <Image className="logo" src={sango} /> */}
              
              <h1 className="sango-title">We build</h1>
              <span ref={ref} className='random-word sango-title'></span> 
              <h1 className="sango-title">digital platforms</h1>

            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Hero;