import React from 'react'
import { Row, Col, } from "react-bootstrap"
import PropTypes from 'prop-types'
import Item from './Item.jsx'
import { DataContext } from './DataContext.jsx'

const SelectedList = (props) => {
  const context = React.useContext(DataContext)
  const { title } = props

  return (
    <Row className="react-awesome-selector-selected-list">
      {title && (
        <Col md="auto" className="react-awesome-selector-selected-list-title">
          {title}

        </Col>
      )}
      <Col className="react-awesome-selector-selected-list-items">
        {context.selectedList.map((item) => {
          const handleIconClick = () => context.removeSelected(item)
          return (
            <Item key={item.key} selected onIconClick={handleIconClick}>
              {item.name}
            </Item>
          )
        })}
      </Col>
    </Row>
  )
}

SelectedList.propTypes = {
  title: PropTypes.string,
}

export default SelectedList