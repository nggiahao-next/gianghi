"use client";
import { useEffect, useState } from "react";
import styles from "./lienhe.module.css";

export default function LienHe() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/user");
        const result = await response.json();
        if (response.ok) {
          console.log("User:", result.data);
          setUsers(result.data);
        } else {
            console.error("Error fetching user:", result.error);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className={styles.content}>
      <h2>Liên hệ </h2>
      {user.map((user) => (
        <div key={user._id} className={styles.user}>
          <p>Tên: {user.name}</p>
          <p>Địa chỉ: {user.address}</p>
        </div>
      ))}
    </div>
  );
}
