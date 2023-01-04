import { NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getInvoices } from 'data/fakeApi';
import './Invoices.scss';

const Invoices = props => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);

  return (
    <div className="invoice-container">
      <aside className="invoices-aside">
        <ul className="list-invoices">
          {invoices.map(({ id }) => (
            <li key={id} className="item">
              <NavLink to={id} className="link">
                {id}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
      <div className="invoice-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Invoices;
