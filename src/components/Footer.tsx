import React from 'react';

const Footer: React.FC = () => {
  return (
<footer className="bg-gray-100 py-2 px-2 flex flex-col md:flex-row items-center justify-between  mt-auto w-full">
  <div className="flex items-center">
    <span className="ml-2 font-bold text-lg text-gray-700">Dossier Formation</span>
  </div>
  <div className="flex justify-center flex-wrap">
    <a href="/" className="mx-4 my-2 hover:text-gray-900 hover:underline">
      Mention Légales
    </a>
    <a href="/" className="mx-4 my-2 hover:text-gray-900 hover:underline">
      Cookies
    </a>
    <a href="/" className="mx-4 my-2 hover:text-gray-900 hover:underline">
      Tarifs
    </a>
    <a href="/" className="mx-4 my-2 hover:text-gray-900 hover:underline">
      Contact
    </a>
    <a href="/" className="mx-4 my-2 hover:text-gray-900 hover:underline">
      FAQ
    </a>
  </div>
  <div className="flex items-center ml-4 text-sm text-gray-700 hover:text-gray-900">
    <a href="/">Mention Légales</a>
  </div>
</footer>



  );
};

export default Footer;