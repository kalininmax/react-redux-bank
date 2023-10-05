import { useSelector } from 'react-redux';
import CreateCustomer from './components/CreateCustomer';
import Customer from './components/Customer';
import AccountOperations from './components/AccountOperations';
import BalanceDisplay from './components/BalanceDisplay';

import './App.css';

const App = () => {
  const fullName = useSelector((state) => state.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === '' ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
};

export default App;
