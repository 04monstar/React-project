import ReactDom from 'react-dom/client'
import App from'./App'
import React from 'react';
import './index.css'

const newElement = React.createElement(  // how  to create a react element
    
           

// render method is used to add our app into HTML page, it takes one argument which is an element
    'a', // tag name 
    {                                  // passing the pair values
        href: "https://www.google.com",         // props object  
        target:"_blank" 
    },
    'Google' // childern
);


const root = ReactDom.createRoot(document.getElementById( "root"));
root.render(
      //newElement the element which is render on web


      <App />


);