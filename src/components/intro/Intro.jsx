import "../intro/intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true, 
      backDelay: 3500,
      backSpeed: 40,
      strings: ['Junior Developer', 'Boooyah' ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div id="left">
        <div id="imgContainer">
          <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="" />
        </div>
      </div>
      <div id="right">
        <div className="wrapper">
          <h2>hello world, I'm</h2>
          <h1>Jessi</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow.png" alt="" />
        </a>
      </div>
    </div>
  )
}