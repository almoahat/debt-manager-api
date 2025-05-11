import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [debts, setDebts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/debts')
      .then(response => setDebts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Debt Manager</h1>
      <ul>
        {debts.map(debt => (
          <li key={debt._id}>
            {debt.debtor} owes ${debt.amount} - Due {new Date(debt.dueDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
