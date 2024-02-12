'use client'
import React, { useContext } from "react";
import Search from "../components/search.js";
import Card from "../components/exploreCard.js";
import {ExploreContext} from "../context/explorecontext.js";

const Explore = () => {
  const { internships, loading } = useContext(ExploreContext);
  // console.log(internships);

  return (
    <>
      <Search />
      <div className="border ">

      {internships  && internships.map((internship) => (
        <Card key={internship._id} internship={internship} />
           
        ))}
        
      </div>
    </>
  );
};

export default Explore;