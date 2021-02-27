const Layout = props => {
    return(
        <>
            <nav>
                NavBar
            </nav>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default Layout