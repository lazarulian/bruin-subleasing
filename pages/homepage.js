import React, { useState } from "react";
import Hero from "@/components/Hero";
import Supportpage from "@/components/Supportpage";
import Infotab from '@/components/Infotab'


function homepage() {
  return (
    <div>
      <Hero />
      <Infotab />
      <Supportpage />
    </div>
  );
}

export default homepage;
