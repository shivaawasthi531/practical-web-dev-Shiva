
import { useState, useEffect } from 'react'

function UserList() {

   
  const [users, setUsers] = useState([])


  const [loading, setLoading] = useState(true)

   
  useEffect(() => {
  

    const fetchUsers = async () => {
      try {
       
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()

        setUsers(data)

       
        setLoading(false)

      } catch (error) {
        
        console.error('Error fetching users:', error)
        setLoading(false)
      }
    }

   
    fetchUsers()

  }, []) /
  if (loading) {
    return <div className="loading"> Loading users from API...</div>
  }

  return (
    <div className="user-list">
      {/*
        🔽 
        

      */}
      {users.map((user) => (
        <div key={user.id} className="user-card">
          {/*

          */}
          <p className="user-username"> <strong>Username:</strong> {user.username}</p>
          <p className="user-email"> <strong>Email:</strong> {user.email}</p>
        </div>
      ))}
    </div>
  )
}


export default UserList
