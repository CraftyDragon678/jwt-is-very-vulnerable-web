import { AxiosResponse } from 'axios';
import type { NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';
import useUser from '../hooks/useUser';
import api from '../utils/api';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 1rem;
  row-gap: 10px;
`;

const LoginButton = styled.input`
  margin-top: 1rem;
  width: 230px;
`;

const Login: NextPage = () => {
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  });
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('test');
    e.preventDefault();
    const { data: loginData } = await api.post<
      { id: string; password: string },
      AxiosResponse<{ _id: string; exp: string; authorization: string }>
    >('/auth/login', { id, password });
    localStorage.setItem('accessToken', loginData.authorization);
    await mutateUser();
  };

  return (
    <Form onSubmit={handleLogin}>
      <label>
        username:
        <input
          type='text'
          name='id'
          autoComplete='username'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>
      <label>
        password:
        <input
          type='password'
          name='password'
          autoComplete='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <LoginButton type='submit' value='login' />
    </Form>
  );
};

export default Login;
