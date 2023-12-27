
import { getServerSession } from "next-auth";
import Profile from "./profile/profile";
import { authOptions } from "@/lib/auth";


const MyAccount = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <>
      <Profile />
    </>
  );
};

export default MyAccount;
