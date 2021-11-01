import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';

export interface User {
  id: string;
  admin: boolean;
}

export default function useUser({
  redirectTo = '/login',
  redirectIfFound = false,
  requiredAdmin = false,
} = {}) {
  const { data: user, mutate: mutateUser } = useSWR<User | null>('/users/me');

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || user === undefined) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user) ||
      (requiredAdmin && user?.type !== 'admin')
    ) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo, requiredAdmin]);

  return { user, mutateUser };
}
