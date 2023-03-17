import { useEffect, useState, React } from "react";
import { collection, addDoc, getDocs, orderBy, query, where } from "firebase/firestore";
import Card from "@/components/card/Card";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import { db } from "@/pages/api/firebase-config";
import Link from "next/link";


const Search = () => {
  const [initials, setInitials] = useState([]);
  const [apartments, setApartments] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");
  const [startingMessage, setStartingMessage] = useState("Get started by looking up an address:");
  const [show, setShow] = useState(false); 
  // setShow is used to show data only when an address is inputted

  useEffect(() => {
    const getInitial = async () => {
      const q = query(collection(db, "apartments"));
      const data = await getDocs(q);
      setInitials(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .map((initial) => initial.streetname)
          .filter(onlyUnique)
      );
    };
    getInitial();
  }, []);

  const [search, setSearch] = useState(initials[0]);
  const [inputValue, setInputValue] = useState("");

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const getApartments = async (search) => {
    if (search != null) {
    const q = query(
      collection(db, "apartments"),
      where("streetname", "==", search),
     // orderBy("year")
    );
    const data = await getDocs(q);
    setApartments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setShow(true);
    setConfirmMessage("Click on a listing to view more information:")
    setStartingMessage("");
    }
    else {
        setErrorMessage("Please enter a valid street name!");
        setConfirmMessage(null);
        setStartingMessage("");
        setShow(false);
    }
  };

  const data = {
    labels: apartments.map((apartment) => apartment.year),
    datasets: [
      {
        label: "Price Trajectory",
        data: apartments.map((apartment) => apartment.rent),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <div className="text-center mb-2 rounded-lg">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold py-3">Search for a specific listing:
        </h1>
      </div>
      {/* <p className="text-2 font-normal"> {startingMessage + "\n"} </p> */}
      <div className="flex justify-center">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Autocomplete
            options={initials}
            value={search}
            onChange={(event, newValue) => {
              setSearch(newValue);
              setErrorMessage(null);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
              setErrorMessage(null);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Apartments" />
            )}
          />
        </FormControl>
       
        <button
          className="text-white absolute right-9 bg-sky-800 hover:opacity-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 duration-300"
          onClick={() => {
            getApartments(search);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && (
                <p className="text-red-400 text-xs italic animate-bounce">{errorMessage}</p>
              )}
      {confirmMessage && (
                <p className="text-green-800 text-xs">{confirmMessage}</p>
              )}
      <div className="grid grid-cols-2 gap-2">
       
    
      </div>
      {/* using similar implementation as <CardGrid/> here: */}
      <div className="max-w-5xl mx-auto grid lg:grid-cols-4 grid-cols-1 gap-4 px-3 py-6">
      {apartments && show &&
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
    </div>
  );
};

export default Search;