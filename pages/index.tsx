import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import useUser from '../hooks/useUser';

const Home: NextPage = () => {
  const { user } = useUser({ redirectTo: '' });
  const random = React.useRef(Date.now());
  const { data: flag } = useSWR(['/flag', random]);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              {user ? (
                <>
                  <Link href='/logout'>로그아웃</Link>
                  <br />
                  id: {user.id}
                  <br />
                  admin permission: {user.admin ? '있음' : '없음'}
                  <br />
                  flag: {flag ?? '어드민이 되어라!'}
                </>
              ) : (
                <Link href='/login'>로그인</Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Home;
