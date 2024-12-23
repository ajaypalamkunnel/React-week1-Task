import React, { useEffect, useState } from "react";
import "./counter.css";
import axios from "axios";
function Counter() {
  const [count, setCount] = useState(1);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${count}`
        );
        setUserData(response.data);
      } catch (error) {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [count]);

  console.log(userData);

  const increment = () => setCount((prev) => (prev < 10 ? prev + 1 : prev));
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div>
      <div className="counter">
        {/* <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button> */}
        <button onClick={decrement}>-</button>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
      </div>

      <div className="user-info">
        {loading && <p>Loading user information...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {userData && !loading && !error && (
          <div>
            <h2>User Information</h2>
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Username:</strong> {userData.username}
            </p>
            <p>
              <strong>Website:</strong> {userData.website}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Counter;
