import React from "react";
import users from "./users.json";
const User = () => {
  return (
    <div className="users">
      {users.map((path) => {
        return (
          <>
            <h1>Ism:{path.name}</h1>
            <h2>Yosh:{path.age}</h2>
            <h3>Tel:{path.phone}</h3>
          </>
        );
      })}
    </div>
  );
};

export default User;
