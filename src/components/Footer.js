import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()
    return (
        <footer>

            <p>Made with <span>&#9829;</span></p>
            {location.pathname === '/' ? <Link to="/about"> About </Link> : <p>@ibtsam3301</p>}

        </footer >
    )
}

export default Footer
