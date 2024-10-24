/** @format */

// src/features/users/UserDetails.tsx
import React from "react";
import { useGetUserByIdQuery } from "./usersApi";

interface UserDetailsProps {
  userId: number;
}

const UserDetails: React.FC<UserDetailsProps> = ({ userId }) => {
  const { data: user, error, isLoading } = useGetUserByIdQuery(userId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching user details</p>;

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default UserDetails;
