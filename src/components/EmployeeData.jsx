import React from 'react'

const EmployeeData = () => {
  const data = JSON.parse(localStorage.getItem('user')) || []
  return (
    <>
    <table className='table'>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
      {
    data.map((item)=>{
      return <tr key={item.email}>
        <td>{item.name}</td>
        <td>{item.email}</td>
      </tr>
    })
    }
      </tbody>
    </table>
    </>
  )
}

export default EmployeeData