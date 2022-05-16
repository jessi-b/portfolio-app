import '../topbar/topbar.scss'
import { IoIosMail } from "react-icons/io";

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
        <a href='#intro' className='logo'>♩♭</a>
        {/* <div className='itemContainer'> */}
          {/* <CallSharpIcon className="icon"/>
          <span>555.999.0123</span>
        </div> */}
        <div className='itemContainer'>
          <IoIosMail className="icon"/>
          <span>email@address.com</span>
        </div>
        <div className='right'></div>
        <div className="menu">
          {/* <a href='#portfolio'>PORTFOLIO</a>
          <a href='#work'>WORK</a>
          <a href='#testimonials'>TESTIMONIALS</a>
          <a href='#contact'>CONTACT</a> */}
        </div>
        
        </div>
      </div>
    </div>
    
  )
}