import React, { useState, useEffect } from 'react';
import data from '../../api/data';
import Card from '../../UI/Card';
import AddProduct from './AddProduct';
import style from './AdminPage.module.css';

function AdminPage() {
  const [shopping, setShopping] = useState([]);
  const [id, setId] = useState(null);
  useEffect(() => {
    const datafetch = async () => {
      const response = await data.get('?limit=24');
      setShopping(response.data);
    };
    datafetch();
  }, []);

  const products = shopping.map((product) => {
    return (
      <Card className={style.itemList} key={product.id} id={product.id}>
        <img
          src={product.image}
          alt={product.title}
          id={`product${product.id}`}
        />
        <div
          className={style.description}
          onClick={() => {
            setId(product.id);
          }}
        >
          <p>{product.title}</p>
          <span>${product.price} </span>
          <a href="#reviews">
            {product.rating.rate} ({product.rating.count})
          </a>
        </div>
        <div className={style.butn}>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </Card>
    );
  });
  console.log(id);
  return (
    <>
      <div className={style.container}>
        <Card>
          <AddProduct />
        </Card>
      </div>
      {products}
    </>
  );
}

export default AdminPage;
