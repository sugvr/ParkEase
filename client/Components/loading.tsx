
import { PulseLoader } from 'react-spinners';


const Loading = () => {
  return (
    <PulseLoader className={`block mx-auto`} size={50} loading={true} />
  );
};

export default Loading;