import React, { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Supportpage from "@/components/Supportpage";
import Infotab from '@/components/Infotab'
import Footer from '@/components/Footer'


function homepage() {
  return (
    <div>
      <Hero />
      <Infotab />
      <Supportpage />
      <Footer/>
    </div>
  );
}

export default homepage;
