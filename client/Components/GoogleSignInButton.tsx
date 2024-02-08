'use client'

import Getcolor from '@/Constants/GetColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { signIn, useSession } from 'next-auth/react';
import { Button } from './LoginComponents/button';

const GoogleSignInButton = () => {
  const handleClick = () => {
    signIn('google');

    const { data: session } = useSession()
    console.log(session)
  };


  return (
    <Button onClick={handleClick} className={`bg-${Getcolor(1)} text-black py-2 px-4 hover:bg-neutral-200 rounded-full flexCenter`}>
      <FontAwesomeIcon icon={faGoogle} className="mr-2" />
      Sign In with Google
    </Button>
  );
};

export default GoogleSignInButton;