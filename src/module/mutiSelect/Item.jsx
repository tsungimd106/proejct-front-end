import React from 'react'
import PropTypes from 'prop-types'

function Item(props) {
  const handleClick = () => props.onIconClick()

  const imageSrc = require(props.selected
    ? './assets/icons/times.svg'
    : './assets/icons/plus-solid.svg')

  return (
    <div className="react-awesome-selector-item" onClick={handleClick}>
      {props.children}
      <img
        className="react-awesome-selector-item-icon"
        alt="none"        
        src={imageSrc}
      />
    </div>
  )
}

Item.propTypes = {
  onIconClick: PropTypes.func,
  selected: PropTypes.bool,
}

Item.defaultProps = {
  onIconClick: () => {},
}

export default Item