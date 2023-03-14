import React from "react";
import Card from "./Card";
import { UseAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { db } from "@/pages/api/firebase-config";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

const MyPosts = () => {
  const [apartments, setApartments] = useState([]);
  const { currentUser } = UseAuth();

  useEffect(() => {
    const getApartments = async () => {
      const q = query(
        collection(db, "apartments"),
        where("uid", "==", currentUser.uid)
      );
      const data = await getDocs(q);
      const d_apartments = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const ids = new Set(d_apartments.map((elem) => elem["uid"]));
      console.log(ids);
      setApartments(d_apartments);
    };
    getApartments();
  }, []);

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-4 gap-4">
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
    </div>
  );
};

export default MyPosts;
