import "../contact/contact.scss"
import { useState } from "react";

export default function Contact() {
  const [message, sent] = useState(false)
  const handleSubmit = (s) => {
    s.preventDefault();
    sent(true);
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1haWx8ZW58MHx8MHx8&auto=format&fit=crop&w=400" alt="" srcset="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name"  />
          <input type="text" placeholder="email@address.com" />
          <textarea placeholder="Message..." />
          <button type="submit">Send</button>
          {message && <span>Sent!</span>}
        </form>
      </div>
    </div>
  )
}