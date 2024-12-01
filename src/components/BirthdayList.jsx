import { useState, useEffect, useContext } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '@context/AuthContext';

const BirthdayList = () => {
  const [birthdays, setBirthdays] = useState([]);
  const [newBirthday, setNewBirthday] = useState({ name: '', date: '' });
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBirthdays();
  }, []);

  const fetchBirthdays = async () => {
    try {
      const response = await axios.get('/api/birthdays');
      setBirthdays(response.data);
    } catch (error) {
      console.error('Error fetching birthdays:', error);
      if (error.response?.status === 401) {
        await logout();
        navigate('/login');
      }
    }
  };

  const addItem = async () => {
    try {
      const response = await axios.post('/api/birthdays', newBirthday);
      setBirthdays([...birthdays, response.data]);
      setNewBirthday({ name: '', date: '' });
    } catch (error) {
      console.error('Error adding item:', error);
      if (error.response?.status === 401) {
        await logout();
        navigate('/login');
      }
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Birthdays</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <ul>
        {birthdays.map((item) => (
          <li key={item._id}>
            {item.name}: {new Date(item.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Name"
        value={newBirthday.name}
        onChange={(e) => setNewBirthday({ ...newBirthday, name: e.target.value })}
      />
      <input
        type="date"
        value={newBirthday.date}
        onChange={(e) => setNewBirthday({ ...newBirthday, date: e.target.value })}
      />
      <button onClick={addItem}>Add Birthday</button>
    </div>
  );
};

export default BirthdayList;