import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { authenticate } from '../store'

const Login = () => {
  const dispatch = useDispatch()

  const { error } = useSelector((state) => {
    return state.auth
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const formName = e.target.name
    const email = e.target.email.value
    const password = e.target.password.value
    dispatch(authenticate(email, password, formName))
  }

  return (
    <div id="logins">
      <form id="loginForm" onSubmit={handleSubmit} name="login">
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
          <button type="submit">Login</button>
        </div>
        <p>
          Dont have an account? <Link to="/signup">Sign Up</Link>
        </p>
        {error && error.response && (
          <div style={{ color: 'red' }}> {error.response.data} </div>
        )}
      </form>
    </div>
  )
}

export default Login
