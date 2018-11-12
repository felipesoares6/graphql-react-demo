import React from 'react';

import { Mutation } from 'react-apollo';

import { CREATE_USER } from '../queries/user';

import Form from '../components/Form';

const CreateUser = () => (
  <Mutation mutation={CREATE_USER}>
    {(createUser ,{ loading, error, data }) => (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{`Error: ${error}`}</p>}
        {data && <p>{`The User ${data.createUser.name} was created with the ID: ${data.createUser.id}`}</p>}

        <Form
          onSubmit={(values) => createUser({
            variables: values
          })}
        />
      </div>
    )}
  </Mutation>
);


export default CreateUser;
