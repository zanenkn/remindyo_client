import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BirthdayList = () => {
  const [birthdays, setBirthdays] = useState([]);
  const [newBirthday, setNewBirthday] = useState({ name: '', date: '' });

  useEffect(() => {
    axios
      .get('/api/birthdays')
      .then((response) => setBirthdays(response.data))
      .catch((error) => console.error('Error fetching birthdays:', error));
  }, []);

  const addItem = () => {
    axios
      .post('/api/birthdays', newBirthday)
      .then((response) => {
        setBirthdays([...birthdays, response.data]);
        setNewBirthday({ name: '', date: '' });
      })
      .catch((error) => console.error('Error adding item:', error));
  };

  return (
    <div>
      <h1>Birthdays</h1>
      <ul>
        {birthdays.map((item) => (
          <li key={item._id}>
            {item.name}: {item.date}
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
        placeholder="Select a date"
        value={newBirthday.date}
        onChange={(e) => setNewBirthday({ ...newBirthday, date: e.target.value })}
      />
      <button onClick={addItem}>Add Birthday</button>
    </div>
  );
};

export default BirthdayList;
