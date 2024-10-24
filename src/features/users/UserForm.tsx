/** @format */

// src/features/users/UserForm.tsx
import React, { useState } from "react";
import { useAddUserMutation, useUpdateUserMutation } from "./usersApi";

import { User } from "../../types";

interface UserFormProps {
  existingUser?: User;
  onSubmit: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ existingUser, onSubmit }) => {
  const [username, setUserName] = useState(existingUser?.username || "");
  const [email, setEmail] = useState(existingUser?.email || "");
  const [password, setPassword] = useState(existingUser?.email || "");
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (existingUser) {
      await updateUser({ id: existingUser.id, username, email, password });
    } else {
      await addUser({ username, email, password });
    }

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">{existingUser ? "Update" : "Add"} User</button>
    </form>
  );
};

export default UserForm;
