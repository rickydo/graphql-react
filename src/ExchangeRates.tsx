import React from 'react';
import { useQuery, gql } from '@apollo/client';


const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>

  return data.rates.map((any: { currency: string; rate: string }) => (
    <div key={any.currency}>
      <p>
        {any.currency}: {any.rate}
      </p>
    </div>
  ))
}

export default ExchangeRates;