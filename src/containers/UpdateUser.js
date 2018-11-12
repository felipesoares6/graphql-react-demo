import React from 'react';

import { Query, Mutation } from 'react-apollo';

import { GET_USER, UPDATE_USER } from '../queries/user';

import Form from '../components/Form';

const UpdateMutation = ({ user }) => (
  <Mutation mutation={UPDATE_USER}>
    {(updateUser, { loading, error, data }) => (
      <div>
        {loading && <p>Loading...</p>}

        {error && <p>{`Error: ${error}`}</p>}

        {data &&
          <p>
            {`The User was updated with the name:
              ${data.updateUser.name} and the email: ${data.updateUser.email}`}
          </p>}

        <Form
          user={user}
          onSubmit={(values) => updateUser({
            variables: { ...values, id: user.id }
          })}
        />
      </div>
    )}
  </Mutation>
);

const UpdateUser = ({ match }) => (
  <Query query={GET_USER} variables={{ id: match.params.id }}>
    {({ loading, error, data }) => (
      <div>
        {loading && <p>Loading...</p>}

        {error && <p>{`Error: ${error}`}</p>}

        {data.user && <UpdateMutation user={data.user} />}
      </div>
    )}
  </Query>
);


export default UpdateUser;
