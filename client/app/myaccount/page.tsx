"use client";
import isAuth from "../Authentication/Authentication"
import Profile from "./profile/profile";

const AuthenticatedMyProfile = isAuth(Profile);

const MyAccount = () => {
  return (
      <AuthenticatedMyProfile />
  );
};

export default MyAccount;
