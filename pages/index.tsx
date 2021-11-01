import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href='/login'>로그인</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Home;
