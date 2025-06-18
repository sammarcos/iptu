

// App.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import MyBoletos from "./src/components/MyBoletos.jsx"


function Cardd( { ...props } ) {
   const data = {};
   return <>
      
   </>;
}

function App() {
   return( <>
      <p className="flex items-center justify-center h-full bg-blue-200 text-4xl">{ "oi" }</p>
      <MyBoletos />
   </> );
}

const appRoot = document.querySelector("app");
if( appRoot ) {
   createRoot( appRoot ).render( <App /> );
} else {
   console.error( "appRoot not found." );
}
    

