import UserComponent from "@/components/login/UserComponent";
import ProfileInformation from "./ProfileInformation";
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
    <div className="max-w-5xl mx-auto grid md:grid-cols-4 grid-cols-1 gap-4">
      {users &&
        users.map((user, idx) => (
          <ProfileInformation
            key={idx}
            fname={user.firstname}
            lname={user.lastname}
            email={user.email}
            phone={user.phonenumber}
            avatar={user.avatar}
          />
        ))}
    </div>
  );
};

export default UserList;
