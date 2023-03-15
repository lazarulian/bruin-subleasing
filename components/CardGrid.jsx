import * as React from "react";
import Link from "next/link";
import Card from "./Card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/pages/api/firebase-config";

const CardGrid = () => {
  const [apartments, setApartments] = React.useState([]);

  React.useEffect(() => {
    // Create a reference to the apartments collection
    const apartmentsRef = collection(db, "apartments");

    // Fetch all the apartments documents and update state
    const getApartments = async () => {
      const querySnapshot = await getDocs(apartmentsRef);
      const apartmentData = querySnapshot.docs.map((doc) => doc.data());
      setApartments(apartmentData);
      console.log(apartmentData);
    };
    getApartments();
  }, []);

  return (
    <div className="max-w-5xl mx-auto grid lg:grid-cols-4 grid-cols-1 gap-4 px-3">
      {apartments &&
        apartments.map((data, idx) => (
          <div key={idx} className="relative">
            <Link href={`/users/${data.uid}`}>
              <Card
                address={data.address}
                bedrooms={data.beds}
                bathrooms={data.baths}
                price={`$${data.rent}`}
                imageUrl={data.imageurl}
                season={`${data.quarter} ${data.year}`}
                slug={data.uid}
              />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CardGrid;
