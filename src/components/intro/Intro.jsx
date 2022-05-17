import "../intro/intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true, 
      backDelay: 3500,
      backSpeed: 40,
      strings: ['Junior Developer', 'Boooyah' ],
    });
  },[])
  return (
    <div className="intro" id="intro">
      <div id="left">
        <div id="imgContainer">
          <img src="" alt="" />
        </div>
      </div>
      <div id="right">
        <div className="wrapper">
          <h2>hi there</h2>
          <h1>Jessi</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down-arrow.jpg" alt="See portfolio" />
        </a>
      </div>
    </div>
  )
}