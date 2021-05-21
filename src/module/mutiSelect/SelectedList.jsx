import React from 'react'
import { Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import Item from './Item.jsx'
import { DataContext } from './DataContext.jsx'

const SelectedList = (props) => {
  const context = React.useContext(DataContext)
  const { title } = props

  return (
   <Grid> <Grid.Row className="react-awesome-selector-selected-list">
      {title && (
        <Grid.Column md="auto" className="react-awesome-selector-selected-list-title">
          {title}

        </Grid.Column>
      )}
      <Grid.Column className="react-awesome-selector-selected-list-items">
        {context.selectedList.map((item) => {
          const handleIconClick = () => context.removeSelected(item)
          return (
            <Item key={item.key} selected onIconClick={handleIconClick}>
              {item.name}
            </Item>
          )
        })}
      </Grid.Column>
   </Grid.Row></Grid>  
  )
}

SelectedList.propTypes = {
  title: PropTypes.string,
}

export default SelectedList