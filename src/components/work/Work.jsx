import '../work/work.scss'
import { useState } from 'react'

export default function Work() {
  const [currentSlide, setSlide] = useState(0);
  const project = [{
    id: "1",
    icon: "",
    title: "Title",
    desc: "Sometimes horses cough and fart at the same time, so stay out of the range of its butt muscle because a horses butt muscle is thick. These kind of things only happen for the first time once.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}, {
    id: "2",
    icon: "",
    title: "Title",
    desc: "Did you feel that? Look at me - I'm not out of breath anymore!You gotta go through it to see there ain't nothing to it.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=910&q=80"},{
    id: "3",
    icon: "",
    title: "Title",
    desc: "Go with the feeling of the nature. Take it easy. Know why you're here. And remember to balance your internal energy with the environment.",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
  }];
  const handleClick = (direction) => {
    direction === "left" 
    ? setSlide(currentSlide > 0 ? currentSlide-1 : 2) 
    : setSlide(currentSlide<project.length-1 ? currentSlide + 1 : 0)
  }
  return (
    <div className='work' id='work'>
      <div className='slider' style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
        {project.map(proj => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="lContainer">
                  <div className="imgContainer">
                    <img src={proj.icon}  alt='' />
                  </div>
                  <h2>{proj.title}</h2>
                  <p>{proj.desc}</p>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img src={proj.img} alt='' />
              </div>
            </div>
          </div>
        ))}
        
      </div>
      <img src='assets/arrow.png' className='arrow left' alt='' onClick={() => handleClick("left")}/>
      <img src='assets/arrow.png' className='arrow right' alt='' onClick={() => handleClick('right')} />
    </div>
  )
}