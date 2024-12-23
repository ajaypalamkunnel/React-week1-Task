import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Profile from "./components/profile";

function App() {
  const users = [
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
    { id: 3, name: "Alice Johnson", email: "alicej@example.com" },
    { id: 4, name: "Bob Brown", email: "bobbrown@example.com" },
    { id: 5, name: "Charlie Davis", email: "charlied@example.com" },
  ];

  return (
    <div>

    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <Profile
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </div>

    <hr/>

      <h1>Counter App</h1>

      <Counter/>

      <hr />

      <Form/>




    </div>
  );
}

export default App;
