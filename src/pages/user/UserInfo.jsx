import React from "react";
import { Link, useOutletContext } from "react-router-dom";

const UserInfo = () => {
  const { nameOfUsers, ageOfUsers } = useOutletContext();

  // console.log("nameOfUsers", nameOfUsers);

  return (
    <div>
      <h2>UserInfo</h2>
      <p>user의 이름은 {nameOfUsers} 입니다</p>
      <p>user의 나이는 {ageOfUsers}세 입니다</p>
      <Link to="/">userList 보기</Link>
    </div>
  );
};

export default UserInfo;
