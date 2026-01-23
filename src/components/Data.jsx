import React, { useState } from 'react'

const Data = () => {
  const employees = [
    { id: 1, name: "Ravi", role: "Developer", department: "IT", salary: 45000, status: "Present" },
    { id: 2, name: "Ankit", role: "Designer", department: "UI", salary: 40000, status: "Absent" },
    { id: 3, name: "Rakesh", role: "Tester", department: "QA", salary: 38000, status: "Present" },
    { id: 4, name: "Aman", role: "Developer", department: "IT", salary: 50000, status: "Present" },
    { id: 5, name: "Neha", role: "HR", department: "HR", salary: 35000, status: "Absent" },
    { id: 6, name: "Pooja", role: "Manager", department: "Admin", salary: 60000, status: "Present" },
    { id: 7, name: "Kunal", role: "Developer", department: "IT", salary: 47000, status: "Present" },
    { id: 8, name: "Rahul", role: "Tester", department: "QA", salary: 39000, status: "Absent" },
    { id: 9, name: "Sneha", role: "Designer", department: "UI", salary: 42000, status: "Present" },
    { id: 10, name: "Vikas", role: "Developer", department: "IT", salary: 52000, status: "Present" },

    { id: 11, name: "Aarti", role: "HR", department: "HR", salary: 36000, status: "Present" },
    { id: 12, name: "Suresh", role: "Manager", department: "Admin", salary: 65000, status: "Absent" },
    { id: 13, name: "Deepak", role: "Tester", department: "QA", salary: 37000, status: "Present" },
    { id: 14, name: "Rohit", role: "Developer", department: "IT", salary: 48000, status: "Present" },
    { id: 15, name: "Nikita", role: "Designer", department: "UI", salary: 41000, status: "Absent" },
    { id: 16, name: "Sanjay", role: "Developer", department: "IT", salary: 55000, status: "Present" },
    { id: 17, name: "Komal", role: "HR", department: "HR", salary: 34000, status: "Present" },
    { id: 18, name: "Yash", role: "Tester", department: "QA", salary: 39500, status: "Absent" },
    { id: 19, name: "Priya", role: "Designer", department: "UI", salary: 43000, status: "Present" },
    { id: 20, name: "Mohit", role: "Developer", department: "IT", salary: 51000, status: "Present" },

    { id: 21, name: "Ishita", role: "HR", department: "HR", salary: 35500, status: "Absent" },
    { id: 22, name: "Arjun", role: "Manager", department: "Admin", salary: 70000, status: "Present" },
    { id: 23, name: "Pankaj", role: "Tester", department: "QA", salary: 38500, status: "Present" },
    { id: 24, name: "Mehul", role: "Developer", department: "IT", salary: 49500, status: "Absent" },
    { id: 25, name: "Shreya", role: "Designer", department: "UI", salary: 44000, status: "Present" },
    { id: 26, name: "Naveen", role: "Developer", department: "IT", salary: 53000, status: "Present" },
    { id: 27, name: "Bhavna", role: "HR", department: "HR", salary: 36000, status: "Present" },
    { id: 28, name: "Rajat", role: "Tester", department: "QA", salary: 40000, status: "Absent" },
    { id: 29, name: "Simran", role: "Designer", department: "UI", salary: 42500, status: "Present" },
    { id: 30, name: "Akash", role: "Developer", department: "IT", salary: 54000, status: "Present" },

    { id: 31, name: "Sunita", role: "HR", department: "HR", salary: 37000, status: "Absent" },
    { id: 32, name: "Varun", role: "Manager", department: "Admin", salary: 68000, status: "Present" },
    { id: 33, name: "Manish", role: "Tester", department: "QA", salary: 41000, status: "Present" },
    { id: 34, name: "Sahil", role: "Developer", department: "IT", salary: 50000, status: "Absent" },
    { id: 35, name: "Tanya", role: "Designer", department: "UI", salary: 45000, status: "Present" },
    { id: 36, name: "Karan", role: "Developer", department: "IT", salary: 56000, status: "Present" },
    { id: 37, name: "Anjali", role: "HR", department: "HR", salary: 38000, status: "Present" },
    { id: 38, name: "Dev", role: "Tester", department: "QA", salary: 42000, status: "Absent" },
    { id: 39, name: "Pallavi", role: "Designer", department: "UI", salary: 46000, status: "Present" },
    { id: 40, name: "Harsh", role: "Developer", department: "IT", salary: 58000, status: "Present" },

    { id: 41, name: "Nisha", role: "HR", department: "HR", salary: 39000, status: "Absent" },
    { id: 42, name: "Gaurav", role: "Manager", department: "Admin", salary: 72000, status: "Present" },
    { id: 43, name: "Siddharth", role: "Tester", department: "QA", salary: 43000, status: "Present" },
    { id: 44, name: "Prateek", role: "Developer", department: "IT", salary: 60000, status: "Absent" },
    { id: 45, name: "Ira", role: "Designer", department: "UI", salary: 47000, status: "Present" },
    { id: 46, name: "Nitin", role: "Developer", department: "IT", salary: 62000, status: "Present" },
    { id: 47, name: "Reema", role: "HR", department: "HR", salary: 40000, status: "Present" },
    { id: 48, name: "Tarun", role: "Tester", department: "QA", salary: 44000, status: "Absent" },
    { id: 49, name: "Kritika", role: "Designer", department: "UI", salary: 48000, status: "Present" },
    { id: 50, name: "Rohini", role: "Developer", department: "IT", salary: 65000, status: "Present" }
  ];
  const key = ["name", "role", "department", "salary"]
  const [filteredEmployees, setFilteredEmployees] = useState(employees)

  function handleChange(e) {
    let searchText = e.target.value.toLowerCase()

    let filtered = employees.filter(emp =>
      key.some(k =>
        emp[k]?.toString()
          .toLowerCase()
          .includes(searchText)
      )
    )
    setFilteredEmployees(filtered)
  }

  return (
    <>
      <div className='d-flex justify-content-between align-items-center px-3'>
        <h3>Employee Data</h3>
        <p>
          <input type="text" name='search' className='form-control border-2' placeholder='Search' onChange={handleChange} />
        </p>
      </div>
      <table className='table table-bordered'>
        <thead>
          <tr className='table-primary'>
            <td>Name</td>
            <td>Role</td>
            <td>Department</td>
            <td>Salary</td>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(emp => {
            return <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
            </tr>
          })}
        </tbody>
      </table>
    </>
  )
}

export default Data