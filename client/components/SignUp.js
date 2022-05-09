import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { authenticateSignUp } from '../store'

const Signup = () => {
  const [passwordError, setPasswordError] = useState('')
  const dispatch = useDispatch()

  const { error } = useSelector((state) => {
    return state.auth
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formName = e.target.name
    const first_name = e.target.first_name.value
    const last_name = e.target.last_name.value
    const phone_number = e.target.phone_number.value
    const email = e.target.email.value
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value
    if (confirmPassword === password) {
      dispatch(
        authenticateSignUp(
          first_name,
          last_name,
          phone_number,
          email,
          password,
          formName
        )
      )
    }
    if (confirmPassword !== password) {
      setPasswordError('Passwords do not match')
    }
  }

  return (
    <div id="signups">
      <form id="signupForm" onSubmit={handleSubmit} name="signup">
        <div>
          <label htmlFor="first_name">
            <small>First Name</small>
          </label>
          <input name="first_name" type="text" />
        </div>
        <div>
          <label htmlFor="last_name">
            <small>Last Name</small>
          </label>
          <input name="last_name" type="text" />
        </div>
        <div>
          <label htmlFor="phone_number">
            <small>Phone Number</small>
          </label>
          <input name="phone_number" type="text" />
        </div>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">
            <small>Confirm Password</small>
          </label>
          <input name="confirmPassword" type="password" />
        </div>

        <div>
          <button type="submit">Sign Up</button>
        </div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        {error && error.response && (
          <div style={{ color: 'red' }}> {error.response.data} </div>
        )}
        <div style={{ color: 'red' }}>{passwordError}</div>
      </form>
    </div>
  )
}

export default Signup
