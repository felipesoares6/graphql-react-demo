import React from 'react';

import { Mutation } from 'react-apollo';

import { DELETE_USER } from '../queries/user';

const CreateUser = ({ id }) => (
  <Mutation mutation={DELETE_USER}>
    {(deleteUser ,{ loading, error, data }) => (
      <React.Fragment>
        {loading && <p>Loading...</p>}
        {error && <p>{`Error: ${error}`}</p>}
        {data && <p>{`The User ${data.deleteUser.name} was deleted`}</p>}

        <button onClick={() => deleteUser({ variables: { id } })}>
          Delete user
        </button>
      </React.Fragment>
    )}
  </Mutation>
);


export default CreateUser;
