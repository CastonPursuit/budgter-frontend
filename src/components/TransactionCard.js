import '../styles/TransactionCard.css';
import { Link } from 'react-router-dom';

export default function TransactionCard({id, item_name, amount, date}) {
    return (

        <div className="transaction-card">
            <div className="transaction-info"> 
                {id}
                <div> {date} </div>
                <Link to='/details/:id' className='transaction-category '>{item_name}  </Link>
                <div> {amount} </div>
            </div>
        </div>
    )
}