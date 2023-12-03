import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../components/db";

const User = () => {
  const { userId } = useParams();

  return (
    <div>
      <h2>Users</h2>
      <Link to={`/user/${userId}/userInfo`}>User Info 보기</Link>
      <Outlet
        context={{
          nameOfUsers: users[parseInt(userId) - 1].name,
          ageOfUsers: users[parseInt(userId) - 1].age,
        }}
      />
    </div>
  );
};

export default User;
