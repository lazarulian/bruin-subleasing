import React, { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Supportpage from "@/components/Supportpage";
import Infotab from '@/components/Infotab'

function homepage() {
  return (
    <div>
      <Hero />
      <Supportpage />
      <Infotab />
    </div>
  );
}

export default homepage;
