import React from 'react'
import { connect } from 'react-redux'
import { getUser, update } from '../store'

/**
 * COMPONENT
 */
class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props.user,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    // const id = this.state.id
    const first_name = this.state.first_name
    const last_name = this.state.last_name
    const preferred_city = this.state.preferred_city
    const prof_picUrl = this.state.prof_picUrl
    const phone_number = this.state.phone_number
    const email = this.state.email
    const password = this.state.password

    let updatedUser = {
      // id: id,
      first_name: first_name,
      last_name: last_name,
      prof_picUrl: prof_picUrl,
      phone_number: phone_number,
      preferred_city: preferred_city,
      email: email,
      password: password,
    }
    this.props.update(updatedUser, this.props.history)
    // this.setState({})
  }
  async handleChange(event) {
    await this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  }

  componentDidMount() {
    try {
      console.log('mount', this.props.user)
      this.props.getUser(this.props.user.id)
      this.setState({})
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    console.log(this.props, 'props')
    const props = this.props.user

    return (
      <div className="profile">
        <div className="profile-info">
          <h2>Welcome, {props.first_name}!</h2>
        </div>

        <div className="update-form-container">
          <form id="todo-form" onSubmit={this.handleSubmit}>
            <h3>
              <label htmlFor="first_name">Update First Name:</label>
            </h3>
            <input
              first_name="first_name"
              type="text"
              placeholder={props.first_name}
              onChange={this.handleChange}
            />

            <h3>
              <label htmlFor="last_name">Update Last Name:</label>
            </h3>
            <input
              last_name="last_name"
              type="text"
              placeholder={props.last_name}
              onChange={this.handleChange}
            />

            <h3>
              <label htmlFor="email">Update Email:</label>
            </h3>
            <input
              name="email"
              type="text"
              placeholder={props.email}
              onChange={this.handleChange}
            />

            <h3>
              <label htmlFor="phone_number">Update Phone Number:</label>
            </h3>
            <input
              name="phone_number"
              type="text"
              placeholder={props.phone_number}
              onChange={this.handleChange}
            />

            <h3>
              <label htmlFor="city">Update City:</label>
            </h3>
            <input
              name="city"
              type="text"
              placeholder={props.preferred_city}
              onChange={this.handleChange}
            />

            <h3>
              <label htmlFor="photo">Update Photo :</label>
            </h3>
            <input
              name="photo"
              type="URL"
              placeholder={props.prof_picUrl}
              onChange={this.handleChange}
            />
          </form>
          <div className="update-button-container">
            <button
              className="update-button"
              onClick={this.handleSubmit}
              type="submit"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getUser: (id) => dispatch(getUser(id)),
    update: (user) => dispatch(update(user)),
  }
}
export default connect(mapState, mapDispatch)(UserProfile)

// /**
//  * PROP TYPES
//  */
// UserProfile.propTypes = {
//   email: PropTypes.string,
// }
