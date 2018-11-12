import React from 'react';

import { Link } from 'react-router-dom';

import { Query } from 'react-apollo';

import { GET_USERS } from '../queries/user';

import DeleteUser from './DeleteUser';

const Home = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) {
        return <p>Loading...</p>;
      }

      if (error) {
        return <p>{`Error: ${error}`}</p>;
      }

      if (data.users) {
        return (
          <ul>
            {data.users.map(user => (
              <li key={user.id}>
                <h3>{user.name}</h3>

                <p>{user.email}</p>

                <Link to={`/users/update/${user.id}`}>
                  Update user
                </Link>

                <DeleteUser id={user.id} />
              </li>
            ))}
          </ul>
        );
      }
    }}
  </Query>
);

export default Home;
