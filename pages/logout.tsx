import { NextPage } from 'next';
import { useEffect } from 'react';
import useUser from '../hooks/useUser';

const Logout: NextPage = () => {
  const { mutateUser } = useUser({
    redirectTo: '/',
  });

  useEffect(() => {
    localStorage.removeItem('accessToken');
    mutateUser(null, false);
  }, [mutateUser]);

  return null;
};

export default Logout;
