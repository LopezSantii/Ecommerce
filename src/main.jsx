import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

const firebaseConfig = {
  apiKey: "AIzaSyB0iPJEBrI_Vu4kH3zuhEDetx3n0JarIng",
  authDomain: "ecommerce-55e60.firebaseapp.com",
  projectId: "ecommerce-55e60",
  storageBucket: "ecommerce-55e60.appspot.com",
  messagingSenderId: "354856095289",
  appId: "1:354856095289:web:6704fae4293c3e4514c7e8"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
