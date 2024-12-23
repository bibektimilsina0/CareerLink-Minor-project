
'use client'
import React, { useContext } from "react";
import Search from "../components/search.jsx";
import Card from "../components/exploreCard.jsx"
import { ExploreContext } from "../context/explorecontext.js";

const Explore = () => {
  const { internships,setInternships, loading } = useContext(ExploreContext);

  return (
    <>

      <Search  internships={internships} setInternships={setInternships} />
     
      <div className="border ">


      {internships  && internships.map((internship) => (
        <Card key={internship._id} internship={internship} />
           
        ))}
        
      </div>
    </>
  );
};

export default Explore;
