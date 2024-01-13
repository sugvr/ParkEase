import { getSession } from 'next-auth/react';

export async function getMyAccountProps() {
  const session = await getSession();
  return {
    props: {
      session,
    },
  };
}
