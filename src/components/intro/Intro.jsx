import "../intro/intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";
// import TypeWriterEffect from 'react-typewriter-effect';

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true, 
      backDelay: 3500,
      backSpeed: 40,
      strings: ['Junior Developer', 'Boooyah' ]
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div id="left">
        <div id="imgContainer">
          <img src="" alt="" />
        </div>
      </div>
      <div id="right">
        <div className="wrapper">
          <h2>hello world, I'm</h2>
          <h1>Jessi</h1>
          <h3><span ref={textRef}></span></h3>
          {/* <h3><TypeWriterEffect
            textStyle={{
              
              color: '$purple'
            }}
            startDelay={2000}
            cursorColor="$purple"
            multiText={[
              'Junior Developer',
              'Booyah'
            ]}
            multiTextDelay={1000}
            typeSpeed={30}
          /></h3> */}
        </div>
        <a href="#portfolio">
          <img src="assets/arrow.png" alt="" />
        </a>
      </div>
    </div>
  )
}