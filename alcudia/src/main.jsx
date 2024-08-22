import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./contexts/ItemsContext";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTrffN0-HynhkRVG6saAPVz9bAlDzl0D0",
  authDomain: "alcudia-86e42.firebaseapp.com",
  projectId: "alcudia-86e42",
  storageBucket: "alcudia-86e42.appspot.com",
  messagingSenderId: "527047234718",
  appId: "1:527047234718:web:0a189d0183a0ebfae0178f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);





