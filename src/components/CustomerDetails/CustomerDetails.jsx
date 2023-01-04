import { getCustomerById } from 'data/fakeApi';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

const CustomerDetails = props => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);

  const backLinkHref = location.state?.from ?? '/customers';

  return (
    <main>
      {customer && (
        <>
          <Link to={backLinkHref}>Back customers</Link>
          <h2>Details about customer {customer.name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a ab,
            nostrum explicabo assumenda nihil iure accusamus inventore deleniti
            laboriosam quidem error est delectus voluptates temporibus fugit
            similique deserunt non.
          </p>
        </>
      )}
    </main>
  );
};

export default CustomerDetails;
