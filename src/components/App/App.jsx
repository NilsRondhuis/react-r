import { Routes, Route } from 'react-router-dom';
import Section from 'components/common/Section/Section';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Sales from 'page/Sales/Sales';
import Invoices from 'components/Invoices/Invoices';
import InvoiceDetails from 'components/InvoiceDetails/InvoiceDetails';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<div>Welcome!</div>} />
          <Route path="dashboard" element={<div>dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Choose element's navigation</div>} />
            <Route path="analytics" element={<div>analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<div>Choose account id</div>} />
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposits" element={<div>deposits</div>} />
          </Route>
          <Route path="reports" element={<div>reports</div>} />
          <Route path="feedback" element={<div>feedback</div>} />
          <Route path="customers" element={<div>customers</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
