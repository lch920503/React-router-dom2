import React from "react";
import { Link } from "react-router-dom";
import { users } from "../components/db";

const Home = () => {
  return (
    <div>
      <h1>Show Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
