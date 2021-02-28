import { Link } from 'react-router-dom'

import '../../css/Layout.css'

const Layout = props => {
    return(
        <>
            <nav>
                <div className='logo'>
                    <Link to='/'>Elizabeth Guerra</Link>{' '}
                </div>
                <div className='nav-link'>
                    <Link to='/about'>About Me</Link>{' '}
                    <Link to='/portfolio'>Portfolio</Link>{' '}
                    <Link to='/contact'>Contact</Link>{' '}
                </div>
            </nav>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default Layout