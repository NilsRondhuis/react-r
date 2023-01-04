import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import { getCustomers } from 'data/fakeApi';
import './Customers.scss';

const Customers = () => {
  const location = useLocation();
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const visibleCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main>
      <SearchBox onChange={changeFilter} value={filter} />
      {visibleCustomers.length > 0 && (
        <ul className="list-customers">
          {visibleCustomers.map(({ id, name }) => (
            <li key={id} className="item">
              <Link to={`${id}`} state={{ from: location }}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Customers;
