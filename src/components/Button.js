import Proptypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'black',
    text: 'Button'
}

Button.propTypes = {
    color: Proptypes.string,
    text: Proptypes.string
}
export default Button
