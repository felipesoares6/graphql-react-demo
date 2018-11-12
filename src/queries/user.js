import gql from 'graphql-tag';

export const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;
