import React from 'react'

const Dashboard = ({ onLogout }) => {
  const user = JSON.parse(localStorage.getItem('user')) || []
  const currentUser = user.length > 0 ? user[user.length - 1] : { name: 'User' }

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-lime-700">Employee Portal</h1>
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
        >
          Logout
        </button>
      </nav>

      <main className="flex-grow container mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome, {currentUser.name}!</h2>
          <p className="text-gray-600 mb-6">You have successfully logged into the employee dashboard.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-lime-50 p-6 rounded-lg border border-lime-100">
              <h3 className="font-semibold text-lime-800 mb-2">Profile Status</h3>
              <p className="text-sm text-lime-600">Active</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-2">Tasks Pending</h3>
              <p className="text-sm text-blue-600">3 New Tasks</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <h3 className="font-semibold text-purple-800 mb-2">Messages</h3>
              <p className="text-sm text-purple-600">No new messages</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard