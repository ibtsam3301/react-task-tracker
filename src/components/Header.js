import PropTypes from "prop-types";
import Button from './Button';
import { useLocation } from "react-router-dom";

const Header = ({ title, onAddPress, parentState }) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button onClick={onAddPress} color={parentState ? 'red' : 'Purple'} text={parentState ? 'Close' : 'Add'} />}

        </header>

    )
}
Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string
}
export default Header
