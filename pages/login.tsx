import type { NextPage } from 'next';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Login: NextPage = () => {
  return (
    <Form>
      <label>
        username:
        <input type='text' name='id' autoComplete='username' />
      </label>
      <label>
        password:
        <input type='password' name='password' autoComplete='password' />
      </label>
    </Form>
  );
};

export default Login;
