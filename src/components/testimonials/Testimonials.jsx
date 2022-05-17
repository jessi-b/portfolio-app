import '../testimonials/testimonials.scss'

export default function Testimonials() {
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img className='left' src="" alt="" />
            <img className='user' src="https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />
            <img className='right' src="" alt="" />
          </div>
          <div className="center">
            <p>Everybody's different. Trees are different. Let them all be individuals.</p>
          </div>
          <div className="bottom">
            <h3>Name</h3>
            <h4>Title</h4>
          </div>
        </div>
      </div>
    </div>
  )
}