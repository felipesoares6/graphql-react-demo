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

export const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id,
      name,
      email
    }
  }
`;
