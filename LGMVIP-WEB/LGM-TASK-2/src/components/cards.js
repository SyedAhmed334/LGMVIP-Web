import React from "react";
import "./card.css";

const User = ({ id, first_name, last_name, email, avatar }) => {
  return (
    <div className="profile" key={id}>
      <div className="avatar">
        <img src={avatar} alt={first_name} />
      </div>
      <div className="body">
        <div className="first_name">{first_name}</div>
        <div className="last_name">{last_name}</div>
        <div className="user_email">{email}</div>
      </div>
    </div>
  );
};

export default User;
