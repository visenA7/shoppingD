import React, { useEffect, useState, createContext } from 'react';
import data from '../api/data';

export const myContext = createContext();

const ShoppingContext = (props) => {
  const [shopping, setShopping] = useState([]);
  const [id, setId] = useState(null);
  useEffect(() => {
    const datafetch = async () => {
      const response = await data.get('/');
      setShopping(response.data);
    };
    datafetch();
  }, []);

  return (
    <myContext.Provider value={{ shopping, id, setId }}>
      {props.children}
    </myContext.Provider>
  );
};

export default ShoppingContext;
