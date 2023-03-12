import React, { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Supportpage from "@/components/Supportpage";

function homepage() {
  return (
    <div>
      <Hero />
      <Supportpage />
    </div>
  );
}

export default homepage;
