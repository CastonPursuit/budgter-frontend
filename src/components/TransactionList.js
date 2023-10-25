import '../styles/TransactionList.css'
import TransactionCard from './TransactionCard';
import { useState, useEffect } from 'react';

export default function TransactionList() {

    const [transactions, setTransactions] = useState([])
    useEffect( () =>  { 
        fetch('http://localhost:3001/transactions')
        .then(response => response.json())
        .then(data => setTransactions(data) )

    }, [])


    return (
        <div className="transaction-list">
            {transactions.map(transaction => 
                <TransactionCard
                    key={transaction.id}
                    item_name={transaction.item_name}
                    amount={transaction.amount}
                    date={transaction.date}
                />
            )}
            
        </div>
    );
}