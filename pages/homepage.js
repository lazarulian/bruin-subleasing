import React, {useState} from 'react'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Infotab from '@/components/Infotab'


function homepage() {
  return (
    <div>
      <Hero />
      <Infotab />
    </div>
  );
}

export default homepage;
