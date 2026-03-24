import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { getUsers } from "../services/userService";

export const UsersList = () => {
  const { accessToken } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!accessToken) return;

    getUsers(accessToken).then(setUsers).catch(console.error);
  }, [accessToken]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username} ({user.email})
        </li>
      ))}
    </ul>
  );
};
