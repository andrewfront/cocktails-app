import { Link } from 'react-router-dom'
import logo from '../logo.png'
const Navbar = () => {
  return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
<Link to='/'>
    <img className='header__nav-img' src={logo} alt="logo" />
</Link>
<ul className='header__nav-list'>
    <li className='header__nav-link'><Link to='/'>Home</Link></li>
    <li className='header__nav-link'><Link to='/about'>About</Link></li>
</ul>
                </nav>
            </div>
        </header>
  )
}

export default Navbar
