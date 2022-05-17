import '../work/work.scss'

export default function Work() {
  const project = [{
    id: "1",
    icon: "",
    title: "Title",
    desc: "Sometimes horses cough and fart at the same time, so stay out of the range of its butt muscle because a horses butt muscle is thick. These kind of things only happen for the first time once.",
    img: "https://images.unsplash.com/photo-1573952106639-694daec2b88a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyYhttps://images.unsplash.com/photo-1545879456-d3f920f7c42a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80q=802h8MXx8Z3JlZW4lMjBkZWFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}, {
    id: "1",
    icon: "",
    title: "Title",
    desc: "Did you feel that? Look at me - I'm not out of breath anymore!You gotta go through it to see there ain't nothing to it.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=910&q=80"},{
    id: "1",
    icon: "",
    title: "Title",
    desc: "Go with the feeling of the nature. Take it easy. Know why you're here. And remember to balance your internal energy with the environment.",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
  }]
  return (
    <div className='work' id='work'>
      <div className="slider">
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
                </div>
              </div>
              <div className="right">
                <img src={proj.img} alt='' />
              </div>
            </div>
          </div>
        ))}
        
      </div>
      <img src='assets/left-arrow.png' className='arrow left' alt='' />
      <img src='assets/right-arrow.png' className='arrow right' alt='' />
    </div>
  )
}