import '../testimonials/testimonials.scss'

export default function Testimonials() {
  const testimonial = [{
    id: "1",
    name: "Sam",
    title: "Someone Special",
    desc: "Everybody's different. Trees are different. Let them all be individuals. Give him a friend, we forget the trees get lonely too. Be careful. You can always add more - but you can't take it away. Maybe he has a little friend that lives right over here. Just go out and talk to a tree. Make friends with it.",
    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"}, {
    id: "2",
    name: "Jan",
    title: "Someone Special",
    desc: "Everything is happy if you choose to make it that way. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. You have to allow the paint to break to make it beautiful. There are no mistakes. You can fix anything that happens.",
    img: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"}, {
    id: "3",
    name: "Dakota",
    title: "Someone Special",
    desc: "You can get away with a lot. You can spend all day playing with mountains. A tree needs to be your friend if you're going to paint him. It's amazing what you can do with a little love in your heart. That is when you can experience true joy, when you have no fear",
    img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
  }];
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {testimonial.map(test => (
          <div className={'card'}>
            <div className="top">
              <img className='user' src={test.img} alt="" />
            </div>
            <div className="center">
              <p>{test.desc}</p>
            </div>
            <div className="bottom">
              <h3>{test.name}</h3>
              <h4>{test.title}</h4>
            </div>
          </div>
        ))};
      </div>
    </div>
  )
}