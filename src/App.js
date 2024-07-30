import MainLayout from "./layout/Mainlayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../src/pages/dashboard/Dashboard';
import Transfer from '../src/pages/transfer/Transfer';
import Transactions from '../src/pages/transactions/Transactions';
import Account from '../src/pages/account/Account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}> */}
          <Route element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="transfer" element={<Transfer />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="account" element={<Account />} />
            {/* <Route path="settings" element={<Settings />} /> */}
          </Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
