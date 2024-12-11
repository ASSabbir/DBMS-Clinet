import React, { useState, useEffect } from 'react';

const Table = () => {
    const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user data from API
  useEffect(() => {
    fetch('http://localhost:5000/user_info') // Change URL to your backend API endpoint
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);

  // If data is still loading, show a loading message
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">User Table</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Number</th>
            <th className="border px-4 py-2">Gender</th>
            <th className="border px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.number}</td>
              <td className="border px-4 py-2">{user.gender}</td>
              <td className="border px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;