import * as React from 'react';
import Card from './Card';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/pages/api/firebase-config';

const CardGrid = () => {
  const [apartments, setApartments] = React.useState([]);

  React.useEffect(() => {
    // Create a reference to the apartments collection
    const apartmentsRef = collection(db, 'apartments');

    // Fetch all the apartments documents and update state
    const getApartments = async () => {
      const querySnapshot = await getDocs(apartmentsRef);
      const apartmentData = querySnapshot.docs.map((doc) => doc.data());
      setApartments(apartmentData);
    };

    getApartments();
  }, []);

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-4 gap-4">
      {apartments.map((data, idx) => (
        <div key={idx} className="relative">
          <Card
            address={`${data.address} ${data.streetname} ${data.streettype}`}
            bedrooms={data.beds}
            bathrooms={data.baths}
            price={`$${data.rent}`}
            imageUrl={data.imageurl}
            season={`${data.quarter} Quarter`}
          />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
