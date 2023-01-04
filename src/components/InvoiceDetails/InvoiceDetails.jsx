import { getInvoiceById } from 'data/fakeApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InvoiceDetails = props => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    getInvoiceById(invoiceId).then(setInvoice);
  }, [invoiceId]);

  return (
    <>
      {invoice && (
        <div>
          <p>Recipient: {invoice.recipient} </p>
          <p>Account: {invoice.account}</p>
          <p>Total: {invoice.total}$</p>
          <div>
            <h3>Orders</h3>
            <p>
              Created: {new Date(invoice.date.created).toLocaleDateString()}
            </p>
            <p>Due: {new Date(invoice.date.due).toLocaleDateString()}</p>
          </div>
        </div>
      )}
    </>
  );
};

InvoiceDetails.propTypes = {};

export default InvoiceDetails;
