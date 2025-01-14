import { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUser(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (  
    <div className="user-list-container">
      <h1 className="title">Hi User</h1>
      <div className="user-grid">
        {listOfUser.map(user => (
          <div key={user.id} className="user-card">
            <div className="card-content">
              <div className="user-avatar">
                {user.name.charAt(0)}
              </div>
              <h2 className="user-name">{user.name}</h2>
              <div className="user-info-section">
                <h3>Personal Info</h3>
                <p><span>Username:</span> {user.username}</p>
                <p><span>Email:</span> {user.email}</p>
                <p><span>Phone:</span> {user.phone}</p>
                <p><span>Website:</span> {user.website}</p>
              </div>
              
              <div className="user-info-section">
                <h3>Address</h3>
                <p><span>Street:</span> {user.address.street}</p>
                <p><span>Suite:</span> {user.address.suite}</p>
                <p><span>City:</span> {user.address.city}</p>
                <p><span>Zipcode:</span> {user.address.zipcode}</p>
                <div className="geo-info">
                  <p><span>Latitude:</span> {user.address.geo.lat}</p>
                  <p><span>Longitude:</span> {user.address.geo.lng}</p>
                </div>
              </div>

              <div className="user-info-section">
                <h3>Company</h3>
                <p><span>Name:</span> {user.company.name}</p>
                <p><span>Catch Phrase:</span> {user.company.catchPhrase}</p>
                <p><span>BS:</span> {user.company.bs}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;