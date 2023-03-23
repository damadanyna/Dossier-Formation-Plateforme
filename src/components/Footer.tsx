import React, { useState } from 'react';
import logo from '../assets/logo.svg'; 

const Footer: React.FC = () => {
  const [popup_shown,setPopup] =useState(false) 
  const showPopup=(event:React.MouseEvent<HTMLButtonElement>)=>{ 
    setPopup(true)
  };
  const hidePopup=(event:React.MouseEvent<HTMLButtonElement>)=>{ 
    setPopup(false)
  };

  return (
<footer className=' flex w-full z-10 h-full'  >
    <div className=" fixed z-10 top-0 left-0" > 
        { popup_shown &&  
          <div className=' w-screen h-screen backdrop-blur-sm bg-white/30'>
          <div className="absolute left-64 bottom-16 px-4 pt-2 rounded-md flex flex-col w-96 h-36   border border-black bg-white">
            <button onClick={hidePopup} className=" items-center flex-row w-full flex justify-end ">
                <span className=' text-xs'>Fermer</span> 
                <span> x</span>
            </button>
            <div className=" h-full flex justify-center items-center"> 
              <span className=' text-sm'>Mention legal</span>
              </div>
            <div className=' w-full justify-center  flex'>
              <div className=" flex transform -mt-2 -rotate-90 absolute">
                <span className=" transform bg-white rotate-45 w-4 h-4 border-l border-black border-b"></span>
              </div>
            </div>
          </div> 
          </div> 
        }
      </div>
  <div className="  bg-gray-100 z-30 text-xs py-2 px-12 flex flex-col md:flex-row items-center justify-between  mt-auto w-full">
    <div className="flex items-center">
        <img className=' w-7' src={logo} alt="" />
        <span className="ml-2 font-bold text-lg text-gray-700">Dossier Formation</span>
      </div>
      <div className="flex justify-center flex-wrap">
          <button className="mx-4 my-2 font-medium hover:text-gray-900 hover:underline" onClick={showPopup} >Mention Légales</button>
          <a href="/" className="mx-4 my-2 hover:text-gray-900 hover:underline"> Cookies</a>
          <a href="/" className="mx-4 my-2 hover:text-gray-900 hover:underline"> Tarifs</a>
          <a href="/" className="mx-4 my-2 hover:text-gray-900 hover:underline"> Contact</a>
          <a href="/" className="mx-4 my-2 hover:text-gray-900 hover:underline"> FAQ</a>
      </div> 
      <div>
        <span className=' text-stone-900'>© Copyright 2023 Dossier Formation by Factory Online</span>
      </div> 

  </div>
  
 
   
    
  
</footer>



  );
};

export default Footer;