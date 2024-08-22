import { createContext, useState } from "react";

export const ItemsContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    const alreadyExists = items.some((i) => i.id === newItem.id);

    if (alreadyExists) {
      const transformedItems = items.map((i) => {
        if (i.id == newItem.id) {
          return { ...i, quantity: i.quantity + newItem.quantity };
        } else {
          return i;
        }
      });
      setItems(transformedItems);
    } else {
      setItems((prev) => [...prev, newItem]);
    }
  };

  const reset = () => {
    setItems([]);
  };

  const removeItems = (id) => {
    const updatedItems = items.filter((i) => i.id !== id);
    setItems(updatedItems);
  };

  console.log(items);

  return (
    <ItemsContext.Provider value={{ items, addItem, reset, removeItems }}>
      {children}
    </ItemsContext.Provider>
  );
};
