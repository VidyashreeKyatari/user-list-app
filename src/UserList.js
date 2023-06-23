import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => setUsers(data.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by first name"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />

      {users
        .filter(user =>
          user.first_name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(user => (
          <div key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <p>ID: {user.id}</p>
            <p>Name: {user.first_name}</p>
          </div>
        ))}
    </div>
  );
};

export default UserList;
