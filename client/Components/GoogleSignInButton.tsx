import { FC, ReactNode } from 'react';
import { Button } from './LoginComponents/button';
import Getcolor from '@/Constants/GetColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => console.log('login with google');

  return (
    <Button onClick={loginWithGoogle} className={`rounded-full inline-flex items-center bg-${Getcolor(1)} hover:bg-amber-400 text-black px-6 py-2`}>
      <FontAwesomeIcon icon={faGoogle} className="mr-2" />
      {children}
    </Button>
  );
};

export default GoogleSignInButton;