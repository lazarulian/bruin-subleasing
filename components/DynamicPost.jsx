// Initial Imports
import React from "react";
import { useState, useEffect } from "react";

// Component Imports
import Post from "./post/Post";

// Firebase
import { db } from "@/pages/api/firebase-config";
import { collection, doc, getDoc } from "firebase/firestore";

const DynamicPost = ({ documentID, userAvatar }) => {
  // Firebase Query
  const [PostData, setPostData] = useState(null);

  // Call on Load
  useEffect(() => {
    async function getData() {
      const docRef = doc(db, "apartments", documentID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPostData(docSnap.data());
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    }
    if (!PostData) {
      getData();
    }
  }, []);

  return (
    <div>
      {PostData && (
        <Post
          title={PostData.address}
          amenities={PostData.amenities}
          image={PostData.imageurl}
          datePosted={PostData.year}
          timeframe={PostData.quarter}
          squareFeet={PostData.sqft}
          roomates={PostData.roommates}
          description={PostData.summary}
          poster={userAvatar}
          rent={PostData.rent}
          bed={PostData.beds}
          bath={PostData.baths}
        />
      )}
    </div>
  );
};

export default DynamicPost;
