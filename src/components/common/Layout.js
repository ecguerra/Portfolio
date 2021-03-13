import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'

import '../../css/Layout.css'

const Layout = props => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return(
        <>
            <nav>
                <div className='logo'>
                    <Link to='/'>Elizabeth Guerra</Link>{' '}
                </div>
                <div className={click ? 'nav-link active' : 'nav-link'}>
                        <Link to='/about' onClick={closeMobileMenu}>About Me</Link>{' '}
                        <Link to='/portfolio' className='nav-choice' onClick={closeMobileMenu}>Portfolio</Link>{' '}
                        <Link to='/contact' className='nav-choice' onClick={closeMobileMenu}>Contact</Link>{' '}
                </div>
                <div className='mobile-menu' onClick={handleClick}>
                    {click ? (
                        <FiMenu className='menu-icon open' />
                    ) : (
                        <FiMenu className='menu-icon closed' />
                    )}
                </div>
            </nav>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default Layout