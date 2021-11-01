import type { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <form>
      <label>
        username:
        <input type='text' name='id' autoComplete='username' />
      </label>
      <label>
        password:
        <input type='password' name='password' autoComplete='password' />
      </label>
    </form>
  );
};

export default Login;
