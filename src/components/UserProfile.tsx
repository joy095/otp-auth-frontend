/** @format */

import React from "react";
import { useGetUserQuery } from "../features/api/baseApi";

const UserProfile: React.FC = () => {
  const { data, error, isLoading } = useGetUserQuery(1); // Example user ID: 1

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {data?.username}</p>
      <p>Email: {data?.email}</p>
    </div>
  );
};

export default UserProfile;
