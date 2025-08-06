import React, { useState } from "react";

function Task22_UpdateState() {
  // 1. Array of objects (e.g., students)
  const [students, setStudents] = useState([
    { name: "A", age: 20 },
    { name: "B", age: 21 },
    { name: "C", age: 22 }
  ]);

  // 2. Object with multiple properties
  const [product, setProduct] = useState({
    name: "Phone",
    price: 500,
    available: true
  });

  // 3. Various data types in state
  const [message, setMessage] = useState("Hello!");
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Update second student
  const updateStudent = () => {
    const newStudents = [...students];
    newStudents[1] = { name: "Updated B", age: 30 };
    setStudents(newStudents);
  };

  // Update two product fields
  const updateProduct = () => {
    setProduct(prev => ({
      ...prev,
      price: 999,
      available: false
    }));
  };

  return (
    <div className="p-4">
      <h2>Students</h2>
      <ul>
        {students.map((s, i) => (
          <li key={i}>
            {s.name} - Age {s.age}
          </li>
        ))}
      </ul>
      <button onClick={updateStudent}>Update 2nd Student</button>

      <h2 className="mt-4">Product</h2>
      <p>{product.name} - ₹{product.price} - {product.available ? "In Stock" : "Out of Stock"}</p>
      <button onClick={updateProduct}>Update Product</button>

      <h2 className="mt-4">Other State Variables</h2>
      <p>Message: {message}</p>
      <p>Count: {count}</p>
      <p>Logged In: {isLoggedIn ? "Yes" : "No"}</p>

      <button onClick={() => setMessage("Welcome!")}>Change Message</button>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
    </div>
  );
}

export default Task22_UpdateState;
