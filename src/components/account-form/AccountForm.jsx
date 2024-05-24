import React from "react";

const AccountForm = () => {
  return (
    <div className="container">
      <h3 className="account__title">Account</h3>
      <form action="" className="account__form">
        <input type="text" placeholder="Rahmonjon" required />
        <input type="text" placeholder="Programmer" required />
        <input type="email" placeholder="example@gmail.com" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm password" required />
        <button>Save</button>
      </form>
    </div>
  );
};

export default AccountForm;
