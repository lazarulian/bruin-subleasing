import UserComponent from "@/components/login/UserComponent";
import React from "react";
import { useEffect, useState } from "react";
import { db } from "@/pages/api/firebase-config";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getApartments = async () => {
      const q = query(collection(db, "users"));
      const data = await getDocs(q);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getApartments();
  }, []);

  console.log(users);
  return (
    <div>
      {users &&
        users.map((user) => (
          <UserComponent
            key={0}
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            phonenumber={user.phonenumber}
          />
        ))}
    </div>
  );
};

export default UserList;
