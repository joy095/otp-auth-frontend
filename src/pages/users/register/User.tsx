/** @format */

import { useState } from "react";
import UserForm from "../../../features/users/UserForm";
import UsersList from "../../../features/users/UsersList";

const User = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsFormOpen(!isFormOpen)}>
        {isFormOpen ? "Close" : "Add User"}
      </button>
      {isFormOpen && <UserForm onSubmit={() => setIsFormOpen(false)} />}
      <UsersList />
    </>
  );
};

export default User;
