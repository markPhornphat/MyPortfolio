import React from "react";

interface user {
  // To setup the interface to make the variable easy to use ==> Ex: Define "user" variable have id and name as attribute
  id: number;
  email: string;
  name: string;
}

const HomePagee = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  }); //For dynamic data rendered// Disable keeping in cache
  const users: user[] = await res.json();

  return (
    <>
      <h1>Users List</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {" "}
              <td>{user.name}</td>
              <td>{user.email}</td>{" "}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default HomePagee;
