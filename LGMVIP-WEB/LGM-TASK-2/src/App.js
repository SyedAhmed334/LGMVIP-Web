import React, { useEffect, useState } from "react";
import User from "./components/cards";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
      });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <div className="users">
        {users &&
          users.map((user) => {
            return (
              <User
                email={user.email}
                first_name={user.first_name}
                avatar={user.avatar}
                last_name={user.last_name}
              />
            );
          })}
      </div>

      <h2 style={{ textAlign: "center" }}>
        Designed & Developed with ❤️ by Syed Ahmed Shah &copy; copyright 2022{" "}
      </h2>
    </>
  );
};

export default App;
