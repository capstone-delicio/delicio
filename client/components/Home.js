import React from 'react'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { first_name } = props

  return (
    <div>
      <h3>Welcome {first_name}!</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    first_name: state.auth.first_name,
  }
}

export default connect(mapState)(Home)
