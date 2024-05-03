import React from "react";

function admin() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    // Assuming an endpoint /api/users for POST
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((newUser) => setUsers([...users, newUser]));
  };

  const deleteUser = (userId) => {
    // Assuming an endpoint /api/users/{id} for DELETE
    fetch(`/api/users/${userId}`, { method: "DELETE" }).then(() =>
      setUsers(users.filter((user) => user.id !== userId))
    );
  };

  const editUser = (updatedUser) => {
    // Assuming an endpoint /api/users/{id} for PUT
    fetch(`/api/users/${updatedUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    }).then(() => {
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
    });
  };
  return <div></div>;
}

export default admin;
