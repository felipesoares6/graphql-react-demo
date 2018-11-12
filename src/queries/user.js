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

export const GET_USER = gql`
  query user($id: ID!){
    user(id: $id){
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
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $name: String, $email: String) {
    updateUser(id: $id, name: $name, email: $email) {
      id,
      name,
      email,
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      name
    }
  }
`;
