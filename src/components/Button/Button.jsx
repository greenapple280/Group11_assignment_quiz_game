import './Button.css'

function Button ({ children, onClick }) {                      /* onClick- parametr */

    return <button className="button active" onClick={onClick}>
        {children}
        </button> /* handleClick without () */
}

export default Button