import React, { useState } from 'react'
import './Style.css'

function App() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState({})

  // To read values from the input box 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    
    if (!formData.username.trim()) {
      validationErrors.username = "Username is required"
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid"
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters"
    }

    if (!formData.confirmPassword.trim()) {
      validationErrors.confirmPassword = "Confirm password is required"
    } else if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match"
    }

    setError(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder='Username'
            autoComplete='off'
            onChange={handleChange}
          />
          {error.username && <span>{error.username}</span>}
        </div>
        
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder='example@gmail.com'
            autoComplete='off'
            onChange={handleChange}
          />
          {error.email && <span>{error.email}</span>}
        </div>
        
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder=''
            onChange={handleChange}
          />
          {error.password && <span>{error.password}</span>}
        </div>
        
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder=''
            onChange={handleChange}
          />
          {error.confirmPassword && <span>{error.confirmPassword}</span>}
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
