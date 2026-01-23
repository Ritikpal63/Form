import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { User, KeyRound, AtSign, Apple, Facebook, RectangleGoggles, Eye, EyeOff } from 'lucide-react'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    terms: false
  })
  const [error, setError] = useState({})
  const navigate = useNavigate()

  function validate() {
    let errorMsg = {}
    if (!formData.name.trim()) {
      errorMsg.name = "Name is required"
    }
    if (!formData.email.trim()) {
      errorMsg.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errorMsg.email = "Email is invalid"
    }
    if (!formData.password) {
      errorMsg.password = "Password is required"
    } else if (formData.password.length < 6) {
      errorMsg.password = "Password must be at least 6 characters"
    }
    if (!formData.terms) {
      errorMsg.terms = "You must agree to the terms"
    }
    setError(errorMsg)
    return Object.keys(errorMsg).length === 0
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (validate()) {
      let existingData = JSON.parse(localStorage.getItem("user")) || [];
      let updatedData = [...existingData, { name: formData.name, email: formData.email, password: formData.password }]
      localStorage.setItem("user", JSON.stringify(updatedData))
      setFormData({
        name: '',
        email: '',
        password: '',
        terms: false
      })
      setError({})
      alert("Account created successfully!")
      navigate('/signin')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100">
      <div className="card shadow w-96 p-5 bg-white rounded-lg">
        <div className="card-body p-4">
          <h2 className="text-center font-medium text-2xl my-4 text-lime-600">Create Account</h2>
          <form onSubmit={handleSubmit} className='p-3'>
            <div className="mb-3">
              <div className="flex">
                <span className='flex items-center border border-gray-300 px-3 rounded-l-md bg-stone-50 border-r-0'>
                  <User size={"20px"} className='text-lime-600' />
                </span>
                <input
                  type="text"
                  name="name"
                  className={`px-2 py-2 ${error.name ? 'border-red-500' : 'border-gray-300'} border rounded-r-md focus:outline-none w-full focus:ring-2 focus:ring-lime-200`}
                  placeholder="Username"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              {error.name && <div className="text-red-500 text-xs mt-1">{error.name}</div>}
            </div>

            <div className="mb-3">
              <div className="flex">
                <span className='flex items-center border rounded-l-md px-3 border-gray-300 bg-stone-50 border-r-0'>
                  <AtSign size={"20px"} className='text-lime-600' />
                </span>
                <input
                  type="email"
                  name="email"
                  className={`px-2 py-2 ${error.email ? 'border-red-500' : 'border-gray-300'} border rounded-r-md w-full focus:outline-none focus:ring-2 focus:ring-lime-200`}
                  placeholder="user@example.com"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              {error.email && <div className="text-red-500 text-xs mt-1">{error.email}</div>}
            </div>

            <div className="mb-4">
              <div className="flex relative">
                <span className='flex items-center px-3 border border-gray-300 rounded-l-md bg-stone-50 border-r-0'>
                  <KeyRound size={"20px"} className='text-lime-600' />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className={`px-2 py-2 ${error.password ? 'border-red-500' : 'border-gray-300'} border rounded-r-md w-full focus:outline-none focus:ring-2 focus:ring-lime-200`}
                  placeholder="••••••••"
                  onChange={handleChange}
                  value={formData.password}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500 hover:text-lime-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {error.password && <div className="text-red-500 text-xs mt-1">{error.password}</div>}
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="w-4 h-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500 accent-lime-600"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-lime-600 hover:underline">Terms & Conditions</a>
                </label>
              </div>
              {error.terms && <div className="text-red-500 text-xs mt-1">{error.terms}</div>}
            </div>

            <button type="submit" className="w-full bg-lime-700 text-white py-2 rounded-md
         hover:bg-lime-600 transition font-medium">
              Sign Up
            </button>
          </form>
          <div className='flex justify-center items-center gap-3 text-gray-400'>
            <div className='h-px w-20 bg-gray-300'></div>or<div className='h-px w-20 bg-gray-300'></div>
          </div>
          <div className='flex justify-center gap-4 my-4'>
            <button className='bg-lime-700 p-2 rounded-full hover:bg-lime-600 transition'>
              <Facebook color={"white"} size={20} />
            </button>
            <button className='bg-lime-700 p-2 rounded-full hover:bg-lime-600 transition'>
              <Apple color={"white"} size={20} />
            </button>
            <button className='bg-lime-700 p-2 rounded-full hover:bg-lime-600 transition'>
              <RectangleGoggles color={"white"} size={20} />
            </button>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Already have an account? <Link to="/signin" className="text-lime-600 font-semibold hover:underline ms-1">Sign in</Link>
            </p>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Signup