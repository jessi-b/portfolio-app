import '../topbar/topbar.scss'
import { IoIosMail } from "react-icons/io";

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>JB</a>
          {/* <div className='itemContainer'> */}
            {/* <CallSharpIcon className="icon"/>
            <span>555.999.0123</span>
          </div> */}
          <div className='itemContainer'>
            <IoIosMail className="icon"/>
            <span>email@address.com</span>
          </div>
        </div>

        <div className='right'>
          <div className='menuBars' onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}