import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddTransaction.css';

export default function AddTransactionForm() {
  const navigate = useNavigate();
  const initialTransactionState = { date: '', item_name: '', amount: '' };
  const [transaction, setTransaction] = useState(initialTransactionState);
  const [flag, setFlag] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFlag(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTransaction((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (flag) {
      fetch('http://localhost:3001/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transaction),
      })
        .then(() => {
          // Handle success or error here
          setTransaction(initialTransactionState); // Clear the form
          setFlag(false);
          navigate('/'); // Redirect or update state as needed
        })
        .catch((error) => {
          // Handle error
          console.error('Error:', error);
          setFlag(false);
        });
    }
  }, [flag, navigate, transaction, initialTransactionState]);

  return (
    <div className="add-transaction-container">
      <h2 className="add-transaction-title">Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Date:</label>
          <input
            name="date"
            value={transaction.date}
            onChange={handleChange}
            type="text"
            className="form-input"
            placeholder="date"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Category:</label>
          <input
            name="item_name"
            value={transaction.item_name}
            onChange={handleChange}
            type="text"
            className="form-input"
            placeholder="category"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Amount:</label>
          <input
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
            type="text"
            className="form-input"
            placeholder="amount"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
