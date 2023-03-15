import React from "react";
import Card from "./Card";
import ProfileInformation from "./login/ProfileInformation";
import { useState, useEffect } from "react";
import { db } from "@/pages/api/firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  doc,
} from "firebase/firestore";

const MyPosts = ({ uid }) => {
  const [apartments, setApartments] = useState([]);
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getApartments = async () => {
      const q = query(collection(db, "apartments"), where("uid", "==", uid));
      const data = await getDocs(q);
      const d_apartments = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const ids = new Set(d_apartments.map((elem) => elem["uid"]));
      setApartments(d_apartments);
    };

    const getUser = async () => {
      const q = query(collection(db, "users"), where("uid", "==", uid));
      const data = await getDocs(q);
      const users = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserData(users[0]);
      console.log(userData);
    };

    getApartments();
    getUser();
  }, []);

  return (
    <div>
      <div className="flex justify-center py-5">
        <h1 className="text-black text-xl font-bold leading-tight tracking-tight  md:text-4xl dark:text-white">
          {userData && userData.firstname}&nbsp;{userData && userData.lastname}
          &apos;s Listings:
        </h1>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-4">
        {apartments.map((data, idx) => (
          <div key={idx} className="relative">
            <Card
              address={data.address}
              bedrooms={data.beds}
              bathrooms={data.baths}
              price={`$${data.rent}`}
              imageUrl={data.imageurl}
              season={`${data.quarter} ${data.year}`}
              slug={data.uid}
            />
          </div>
        ))}
        {!apartments && (
          <div>
            <p>No listings found :(</p>
          </div>
        )}
      </div>
      <div className="flex justify-center p-5">
        {userData && (
          <ProfileInformation
            fname={userData.firstname}
            lname={userData.lastname}
            email={userData.email}
            phone={userData.phonenumber}
            avatar={userData.avatar}
          />
        )}
      </div>
    </div>
  );
};

export default MyPosts;
