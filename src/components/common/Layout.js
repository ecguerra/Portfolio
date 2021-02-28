import { Link } from 'react-router-dom'

const Layout = props => {
    return(
        <>
            <nav>
                <Link to='/'>Elizabeth Guerra</Link>{' '}
                <div>
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