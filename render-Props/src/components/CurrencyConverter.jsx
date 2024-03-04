import React, { useState } from 'react';

const CurrencyConverter = ({ render }) => {
  const [amount, setAmount] = useState(0);

  return (
    <>
      Inr:
      <input
        type="text"
        name="amount"
        placeholder="Enter Amount...."
        onChange={(e) => setAmount(e.target.value)}
      />
      <div>{render(amount)}</div>
    </>
  );
};

export default CurrencyConverter;
