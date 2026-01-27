import React from 'react'

const EmployeeData = () => {
  const data = JSON.parse(localStorage.getItem('user')) || []
  return (
    <>
    <table className='border-collapse border border-gray-400'>
      <thead className=''>
        <tr>
          <th className='border border-gray-300 p-3'>Name</th>
          <th className='border border-gray-300 p-3'>Email</th>
        </tr>
      </thead>
      <tbody>
      {
    data.map((item)=>{
      return <tr key={item.email}>
        <td className='border border-gray-300 p-3'>{item.name}</td>
        <td className='border border-gray-300 p-3'>{item.email}</td>
      </tr>
    })
    }
      </tbody>
    </table>
    </>
  )
}

export default EmployeeData