import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
	const {type = "button", onClick, className, children} = props
	return (
		<div>
			<button type={type} onClick={onClick} className={className} id="genBtn">
				{children}
			</button>
		</div>
	)
}

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Button




