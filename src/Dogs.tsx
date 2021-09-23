import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Dropdown, Spinner } from '@cmsgov/design-system';


const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

function Dogs({ onDogSelected }: { onDogSelected: (n: number) => void }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return <Spinner />;
  return <Dropdown label="Choose a dog" name="dropdown_dog_field" options={data.dogs} errorMessage={error} onChange={ onDogSelected }/>
}

export default Dogs;