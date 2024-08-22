import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { NavBar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import NotFound from "./components/NotFound";
import { Checkout } from "./components/Checkout";
import { Provider } from "./contexts/ItemsContext";

import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  /*   addDoc,
  doc,
  updateDoc, */
} from "firebase/firestore";

function App() {
  useEffect(() => {
    const db = getFirestore();

    const q = query(
      collection(db, "items"),
      where("category", "==", "mujeres")
    );

    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0);
      else
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
    });
  });

  return (
    <div>
      <Provider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/items/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
